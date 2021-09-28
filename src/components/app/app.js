import React, {Component} from 'react';
import Header from '../header';
import CharacterPage from "../pages/characterPage";
import {Container} from "./styles";
import {GotService} from "../../services/gotSerivce";
import {Col, Row} from "reactstrap";
import ItemList from "../../shared/itemList";
import ItemDetails from "../../shared/itemDetails";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";

export default class App extends Component {
    gotService = new GotService();

    state = {
        isLookBlockRandomCharacter: false
    };

    render() {
        let {isViewBlockRandomCharacter} = this.state;

        const hideRandomChar = () => {
            this.setState({isViewBlockRandomCharacter: !isViewBlockRandomCharacter});
        }

        return (
            <>
                <Container>
                    <Header isLookChar={isViewBlockRandomCharacter} onRandomCharacter={hideRandomChar}/>
                </Container>
                <Container>
                    <CharacterPage isLookBlockRandomCharacter={isViewBlockRandomCharacter} gotData={this.gotService}/>
                    <BooksPage isLookBlockRandomCharacter={isViewBlockRandomCharacter} gotData={this.gotService}/>
                    <HousesPage isLookBlockRandomCharacter={isViewBlockRandomCharacter} gotData={this.gotService}/>
                </Container>
            </>
        );
    }
};
