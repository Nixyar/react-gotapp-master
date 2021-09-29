import React, {useEffect, useState} from 'react';
import {Spinner} from "../../shared/spinner/Spinner";
import ErrorMessage from "../../shared/errorMessage";
import {RandomBlock} from "./styles";
import {GotService} from "../../services/gotSerivce";

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

export default function RandomChar() {
    const gotService = new GotService();

    const [char, setRandomChar] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    const errorMessage = isError ? <ErrorMessage errorText={'Error loading random character'}/> : null;
    const spinner = isLoading ? <Spinner/> : null;
    const content = !(isLoading || isError) ? <RandomContent char={char}/> : null;

    useEffect(() => {
        updateChar();
        const timer = setInterval(() => {
            updateChar();
        }, 5000);

        return () => {
            clearInterval(timer)
        }
    }, []);

    const onCharLoaded = (char) => {
        setRandomChar(char);
        setLoading(false);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 10);
        gotService.getCharacter(id).then(onCharLoaded).catch(onError);
    }

    return (
        <RandomBlock className="rounded">
            {spinner}
            {errorMessage}
            {content}
        </RandomBlock>
    );
};
