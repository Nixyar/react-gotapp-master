import React, {Component} from 'react';
import styled from "styled-components";
import {GotService} from "../../../services/gotSerivce";
import {Spinner} from "../../spinner/Spinner";

export default class ItemList extends Component {
    gotService = new GotService();

    state = {
        charList: null
    };

    componentDidMount() {
        this.gotService.getAllCharacters().then(charList => this.setState({charList}));
    }

    renderItems(arr) {
        return arr.map(char => {
            const charId = char.url.match(/\d+/g);
            return (
                <li className="list-group-item" key={charId + '-character'} onClick={() => this.props.onSelectCharacter(...charId)}>
                    {char.name}
                </li>
            );
        });
    };

    render() {
        const ItemList = styled.ul`
          li {
            cursor: pointer;
          }
        `;
        const {charList} = this.state;
        if (!charList) {
            return <Spinner/>
        }
        const items = this.renderItems(charList);
        return (
            <ItemList className="item-list list-group">
                {items}
            </ItemList>
        );
    }
}
