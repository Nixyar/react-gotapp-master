import React, {Component} from 'react';
import {ItemBlockDetails, SelectItemError} from "./styles";

const Field = ({item, label, field}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {Field};

export default class ItemDetails extends Component {
    state = {
        item: null
    }

    componentDidMount() {
        this.updateItemDetails();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updateItemDetails();
        }
    }

    updateItemDetails() {
        const {gotData} = this.props;
        if (!gotData) {
            return;
        }
        gotData.then(item => this.setState({item}));
    }

    render() {
        const {item} = this.state;
        if (!item) {
            return (
                <SelectItemError>Select item, please!</SelectItemError>
            );
        }
        const {name} = item;
        return (
            <ItemBlockDetails className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </ItemBlockDetails>
        );
    }
}
