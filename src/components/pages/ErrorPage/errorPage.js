import React, {Component} from "react";
import {ErrorNotFoundPage} from "./styles";
import imgError from "./errorImg.jpeg"
import {Link} from "react-router-dom";

export default class ErrorPage extends Component {
    render() {
        return (
            <ErrorNotFoundPage>
                <img src={imgError} alt="404"/>
                <h2>404. Page not found</h2>
                <Link to={'/'}>
                    <button type={'button'}>Go to Main Page</button>
                </Link>
            </ErrorNotFoundPage>
        );
    }
}
