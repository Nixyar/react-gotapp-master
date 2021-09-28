import React from 'react';
import {Component} from "react";
import img from "./404.jpeg"
import {ErrorMessageBlock} from "./styles";

export default class ErrorMessage extends Component {
    render() {
        const {errorText} = this.props;

        return (
            <ErrorMessageBlock>
                {errorText}
                <img src={img} alt="404"/>
            </ErrorMessageBlock>
        );
    }
}
