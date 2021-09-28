import React, {Component} from 'react';
import {Spinner} from "../../shared/spinner/Spinner";
import ErrorMessage from "../../shared/errorMessage";
import {RandomBlock} from "./styles";

export default class RandomChar extends Component {
    state = {
        char: null,
        isLoading: true,
        isError: false
    }

    componentDidMount() {
        this.updateChar();
        this.timer = setInterval(() => {
            this.updateChar();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    onCharLoaded = (char) => {
        this.setState({char});
        this.setState({isLoading: false});
    }

    onError = () => {
        this.setState({isError: true, isLoading: false});
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 10);
        this.props.gotData.getCharacter(id).then(this.onCharLoaded).catch(this.onError);
    }

    render() {
        const {char, isLoading, isError} = this.state;
        const errorMessage = isError ? <ErrorMessage errorText={'Error loading random character'}/> : null;
        const spinner = isLoading ? <Spinner/> : null;
        const content = !(isLoading || isError) ? <RandomContent char={char}/> : null;
        return (
            <RandomBlock className="rounded">
                {spinner}
                {errorMessage}
                {content}
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
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    );
}
