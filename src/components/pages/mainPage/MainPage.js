import React from "react";
import {MainPageContainer} from "./styles";
import imgChar from "./images/characters.jpeg";
import imgHouses from "./images/houses.jpeg";
import imgBooks from "./images/books.jpeg";
import "./style.css";
import {Link} from "react-router-dom";

export default function MainPage(isOpenRandomBlock) {
    const heightWithBlock = isOpenRandomBlock ? 'openRandomChar' : '';
    return (
        <MainPageContainer className={heightWithBlock}>
            <ul>
                <Link to={'/characters'}>
                    <img src={imgChar} alt="characters"/>
                    <p>Characters</p>
                </Link>
                <Link to={'/houses'}>
                    <img src={imgHouses} alt="houses"/>
                    <p>Houses</p>
                </Link>
                <Link to={'/books/'}>
                    <img src={imgBooks} alt="books"/>
                    <p>Books</p>
                </Link>
            </ul>
        </MainPageContainer>
    );
}
