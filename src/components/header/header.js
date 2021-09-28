import React, {Component} from 'react';
import {HeaderBlock, HeaderLinks, HeaderTitle} from "./styles";

export default class Header extends Component {
    render() {
        const {onRandomCharacter, isLookChar} = this.props;
        return (
            <HeaderBlock>
                <HeaderTitle>
                    <a href="#">
                        Game of Thrones DB
                    </a>
                </HeaderTitle>
                <HeaderLinks>
                    <li>
                        <button type={'button'} onClick={onRandomCharacter}>{isLookChar ? 'Hide' : 'Look'} random character</button>
                    </li>
                    <li>
                        <a href="#">Characters</a>
                    </li>
                    <li>
                        <a href="#">Houses</a>
                    </li>
                    <li>
                        <a href="#">Books</a>
                    </li>
                </HeaderLinks>
            </HeaderBlock>
        );
    }
}
