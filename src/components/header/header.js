import React, {Component} from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const HeaderTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

const HeaderLinks = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  color: #fff;
  list-style-type: none;

  li {
    margin-right: 20px;
    font-size: 18px;
  }

  button {
    padding: 12px;
    border: thick double dimgrey;
    border-radius: 10px;
    color: white;
    background-color: transparent;
    outline: none !important;
    transition: 0.2s ease-in;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      color: dimgrey;
      background-color: white;
    }
  }
`;

export default class Header extends Component {
    render() {
        const {onRandomCharacter, isLookChar} = this.props;
        return (
            <HeaderBlock>
                <HeaderTitle>
                    <a href="#">
                        Game of Thrones DB
                    </a>
                </HeaderTitle>
                <HeaderLinks>
                    <li>
                        <button type={'button'} onClick={onRandomCharacter}>{isLookChar ? 'Скрыть' : 'Показать'} случайного персонажа</button>
                    </li>
                    <li>
                        <a href="#">Characters</a>
                    </li>
                    <li>
                        <a href="#">Houses</a>
                    </li>
                    <li>
                        <a href="#">Books</a>
                    </li>
                </HeaderLinks>
            </HeaderBlock>
        );
    }
}
