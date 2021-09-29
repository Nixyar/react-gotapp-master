import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
  width: 100%;
  height: calc(90vh - 80px);

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  a {
    width: 25%;
    height: 80%;
    margin-right: 5%;
    background-color: white;
    border: 1px solid dimgrey;
    text-align: center;
    list-style-type: none;
    border-radius: 10px;
    transition: 0.4s ease;
    overflow: hidden;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: translateY(-20px);
    }
  }

  img {
    width: 100%;
    height: 80%;
    background-size: cover;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: rgba(19, 18, 18, 0.74);
    height: 20%;
  }
`
