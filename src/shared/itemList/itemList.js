import React, {Component} from 'react';
import {Spinner} from "../spinner/Spinner";
import {ItemListElement} from "./styles";

export default class ItemList extends Component {
    state = {
        itemList: null
    };

    componentDidMount() {
        this.props.gotData.then(itemList => this.setState({itemList}));
    }

    renderItems(arr) {
        return arr.map(item => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li className="list-group-item" key={id + label + '-item'} onClick={() => this.props.onSelectItem(id)}>
                    {label}
                </li>
            );
        });
    };

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ItemListElement className="item-list list-group">
                {items}
            </ItemListElement>
        );
    }
}
