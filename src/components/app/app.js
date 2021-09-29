import React, {Component} from 'react';
import Header from '../header';
import CharacterPage from "../pages/characterPage";
import {Container} from "./styles";
import {Col, Row} from "reactstrap";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";
import RandomChar from "../randomChar";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import BooksItem from "../pages/booksPage/booksItem";
import './app.css'
import MainPage from "../pages/mainPage";

export default class App extends Component {
    state = {
        isLookBlockRandomCharacter: false
    }

    render() {
        const {isLookBlockRandomCharacter} = this.state;

        const hideRandomChar = () => {
            this.setState({isLookBlockRandomCharacter: !isLookBlockRandomCharacter});
        }

        const RandomCharBlock = isLookBlockRandomCharacter ? <RandomChar/> : null;

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header isLookChar={isLookBlockRandomCharacter} onRandomCharacter={hideRandomChar}/>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {RandomCharBlock}
                            </Col>
                        </Row>
                        <Switch>
                            <Route path={'/'} exact>
                                {MainPage(isLookBlockRandomCharacter)}
                            </Route>
                            <Route path={'/characters'} component={CharacterPage}/>
                            <Route path={'/houses'} component={HousesPage}/>
                            <Route path={'/books'} component={BooksPage} exact/>
                            <Route path={'/books/:id'} render={({match}) => {
                                const {id} = match.params;
                                return (<BooksItem bookId={id}/>);
                            }}/>
                            <Route path={'/404'} component={ErrorPage}/>
                            <Route path="*" exact>
                                <Redirect to={'/404'}/>
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
};
