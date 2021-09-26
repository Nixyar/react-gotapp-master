import React from 'react';
import {Component} from "react";
import styled from "styled-components";
import img from "./404.jpeg"

export default class ErrorMessage extends Component {
    render() {
        const {errorText} = this.props;
        const ErrorMessageBlock = styled.div`
          font-size: 24px;
          line-height: 12px;
          width: 100%;
          color: rgba(255, 28, 28, 0.88);
          background-color: white;
          padding: 14px;
          border-radius: 10px;
          text-align: center;
          transition: 0.2s ease-in;

          img {
            width: 100%;
            height: 100%;
            margin-top: 12px;
          }
        `
        return (
            <ErrorMessageBlock>
                {errorText}
                <img src={img} alt="404"/>
            </ErrorMessageBlock>
        );
    }
}
