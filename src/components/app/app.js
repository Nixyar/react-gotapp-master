import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from "styled-components";

export default class App extends Component {
    state = {
        isLookBlockRandomCharacter: true
    };

    render() {
        let {isLookBlockRandomCharacter} = this.state;
        const Container = styled.div`
          position: relative;
          padding: 0 24px;
        `
        const RandomCharBlock = isLookBlockRandomCharacter ? <RandomChar/> : null;
        const hideRandomChar = () => {
            this.setState({isLookBlockRandomCharacter: !isLookBlockRandomCharacter});
        }
        return (
            <>
                <Container>
                    <Header isLookChar={isLookBlockRandomCharacter} onRandomCharacter={hideRandomChar}/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {RandomCharBlock}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList/>
                        </Col>
                        <Col md='6'>
                            <CharDetails/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
