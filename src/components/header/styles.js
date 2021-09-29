import styled from "styled-components";

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 24px;
`;

export const HeaderTitle = styled.div`
  margin: 0;
  height: 100%;
  
  img {
    height: calc(100% - 20px);
    margin: 10px auto;
  }
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
    border-bottom: 1px solid transparent;
    opacity: 0.6;
    transition: 0.2s ease-in;
    
    &:hover {
      border-bottom: 1px solid white;
      opacity: 1;
    }
    
    &:nth-child(1) {
      border-bottom: none;
      opacity: 1;
      
      &:hover {
        border-bottom: none;
      }
    }
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
