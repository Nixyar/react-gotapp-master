import React, {Component} from 'react';
import Header from '../header';
import CharacterPage from "../pages/characterPage";
import {Container, MainPage} from "./styles";
import {Col, Row} from "reactstrap";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";
import RandomChar from "../randomChar";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import BooksItem from "../pages/booksPage/booksItem";
import ErrorPage from "../pages/ErrorPage";
import './app.css'

export default class App extends Component {
    state = {
        isLookBlockRandomCharacter: true
    };

    render() {
        let {isLookBlockRandomCharacter} = this.state;

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
                                <MainPage>Welcome to GoT page!</MainPage>
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
