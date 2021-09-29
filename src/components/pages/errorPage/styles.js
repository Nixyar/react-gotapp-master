import styled from "styled-components";

export const ErrorNotFoundPage = styled.div`
  position: absolute;
  top: -15px;
  left: 0;
  padding: 14px 0;
  width: 100%;
  height: 100vh;
  
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 320px;
    padding: 24px;
    border: 4px solid dimgrey;
    border-radius: 12px;
    background-color: white;
    transform: translate(-50%, -50%);
    outline: none !important;
    transition: 0.2s ease-in;
    
    &:hover {
      color: white;
      background-color: dimgrey;
    }
  }
  
  img {
    width: 100%;
    height: 100%;
  }
`
