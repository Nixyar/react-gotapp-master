import React, {Component} from 'react';
import Header from '../header';
import CharacterPage from "../pages/characterPage";
import {Container} from "./styles";
import {GotService} from "../../services/gotSerivce";
import {Col, Row} from "reactstrap";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";
import RandomChar from "../randomChar";

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

        const RandomCharBlock = isViewBlockRandomCharacter ? <RandomChar gotData={this.gotService}/> : null;

        return (
            <>
                <Container>
                    <Header isLookChar={isViewBlockRandomCharacter} onRandomCharacter={hideRandomChar}/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {RandomCharBlock}
                        </Col>
                    </Row>
                    <CharacterPage gotData={this.gotService}/>
                    <BooksPage gotData={this.gotService}/>
                    <HousesPage gotData={this.gotService}/>
                </Container>
            </>
        );
    }
};
