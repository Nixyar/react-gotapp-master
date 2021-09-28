import styled from "styled-components";

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const HeaderTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

export const HeaderLinks = styled.ul`
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
