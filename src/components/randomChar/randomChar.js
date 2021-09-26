import React, {Component} from 'react';
import styled from "styled-components";
import {GotService} from "../../services/gotSerivce";
import {Spinner} from "../spinner/Spinner";
import ErrorMessage from "../errorMessage";

export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }
    gotService = new GotService();

    state = {
        char: {},
        isLoading: true,
        isError: false
    }

    onCharLoaded = (char) => {
        this.setState({isLoading: false});
        this.setState({char});
    }

    onError = () => {
        this.setState({isError: true, isLoading: false});
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 10);
        this.gotService.getCharacter(id).then(this.onCharLoaded).catch(this.onError);
    }

    render() {
        const RandomBlock = styled.div`
          width: 100%;
          background-color: #fff;
          padding: 25px 25px 15px 25px;
          margin-bottom: 40px;
          
          h4 {
            margin-bottom: 20px;
            text-align: center;
          }

          .term {
            font-weight: bold;
          }
        `;
        const {char, isLoading, isError} = this.state;
        const errorMessage = isError ? <ErrorMessage errorText={'Error loading random character'}/> : null;
        const spinner = isLoading ? <Spinner/> : null;
        const content = !(isLoading || isError) ? <RandomContent char={char}/> : null;
        return (
            <RandomBlock className="rounded">
                {content}
                {spinner}
                {errorMessage}
            </RandomBlock>
        );
    }
};

const RandomContent = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender || 'unknown'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born || 'unknown'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died || 'unknown'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture || 'unknown'}</span>
                </li>
            </ul></>
    );
}
