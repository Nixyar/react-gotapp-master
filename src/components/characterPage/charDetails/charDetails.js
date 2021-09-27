import React, {Component} from 'react';
import styled from "styled-components";
import {GotService} from "../../../services/gotSerivce";

export default class CharDetails extends Component {
    gotService = new GotService();
    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.charId !== this.props.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        this.gotService.getCharacter(charId).then(char => this.setState({char}));
    }

    render() {
        const CharacterBlock = styled.div`
          background-color: #fff;
          padding: 25px 25px 15px 25px;
          margin-bottom: 40px;

          h4 {
            margin-bottom: 20px;
            text-align: center;
          }
        `;
        const {char} = this.state;

        return (
            <CharacterBlock className="rounded">
                {char ? CharacterInfo(char) : <p>Select character, please!</p>}
            </CharacterBlock>
        );
    }
}
const CharacterInfo = (char) => {
    const {name, gender, born, died, culture} = char;
    return(
        <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    );
}
