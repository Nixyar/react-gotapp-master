import React from 'react';
import {HeaderBlock, HeaderLinks, HeaderTitle} from "./styles";
import {Link, useLocation} from "react-router-dom";
import logo from "./logo.png"
import './style.css'

export default function Header({onRandomCharacter, isLookChar}) {
    const locationPath = useLocation();

    const classActive = (path) => {
        return locationPath.pathname.match(path) ? 'active' : '';
    }

    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to={'/'}>
                    <img src={logo} alt="logo"/>
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <button type={'button'} onClick={onRandomCharacter}>{isLookChar ? 'Hide' : 'Look'} random
                        character
                    </button>
                </li>
                <li className={classActive('/characters')}>
                    <Link to={'/characters'}>Characters</Link>
                </li>
                <li className={classActive('/houses')}>
                    <Link to={'/houses'}>Houses</Link>
                </li>
                <li className={classActive('/books/')}>
                    <Link to={'/books/'}>Books</Link>
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
}
