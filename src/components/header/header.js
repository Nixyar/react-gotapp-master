import React, {Component} from 'react';
import {HeaderBlock, HeaderLinks, HeaderTitle} from "./styles";
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        const {onRandomCharacter, isLookChar} = this.props;
        return (
            <HeaderBlock>
                <HeaderTitle>
                    <Link to={'/'}>
                        Game of Thrones DB
                    </Link>
                </HeaderTitle>
                <HeaderLinks>
                    <li>
                        <button type={'button'} onClick={onRandomCharacter}>{isLookChar ? 'Hide' : 'Look'} random character</button>
                    </li>
                    <li>
                        <Link to={'/characters'}>Characters</Link>
                    </li>
                    <li>
                        <Link to={'/houses'}>Houses</Link>
                    </li>
                    <li>
                        <Link to={'/books/'}>Books</Link>
                    </li>
                </HeaderLinks>
            </HeaderBlock>
        );
    }
}
