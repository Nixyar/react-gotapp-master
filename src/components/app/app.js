import React, {Component} from 'react';
import Header from '../header';
import styled from "styled-components";
import CharacterPage from "../characterPage";

export default class App extends Component {
    state = {
        isLookBlockRandomCharacter: false
    };

    render() {
        let {isLookBlockRandomCharacter} = this.state;
        const Container = styled.div`
          position: relative;
          padding: 0 24px;
        `
        const hideRandomChar = () => {
            this.setState({isLookBlockRandomCharacter: !isLookBlockRandomCharacter});
        }
        return (
            <>
                <Container>
                    <Header isLookChar={isLookBlockRandomCharacter} onRandomCharacter={hideRandomChar}/>
                </Container>
                <Container>
                    <CharacterPage isLookBlockRandomCharacter={isLookBlockRandomCharacter}
                                   selectChar={this.selectChar}/>
                </Container>
            </>
        );
    }
};
