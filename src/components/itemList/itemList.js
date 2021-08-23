import React, {Component} from 'react';
import styled from "styled-components";

export default class ItemList extends Component {

    render() {
        const ItemList = styled.ul`
          li {
            cursor: pointer;
          }
        `;
        return (
            <ItemList className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ItemList>
        );
    }
}
