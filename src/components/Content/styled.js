import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #84a98c;
`;

export const ContentTitle = styled.div`
    display: flex;
    align-self: center;
    height: 8%;
    width: 90%;
    margin-top: 2px;
    align-content: flex-start;
`;

export const ContentTitleText = styled.h1`
    font-family: BookmanStd-Medium;
`;

export const ContentMessageDisplayContainer = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    margin-top: 1em;
    height: 70%;
    width: 90%;
    border: 15px solid white;
    border-radius: 20px 20% 10%;
    overflow: auto;
`;

export const ContentMessages = styled.div`
    display: flex;
    font-family: Courier New;
    font-size: 1.2em;
`;

export const MessageFormButtonContainer = styled.div`
    diplay: flex;
    height: 3%;
    width: 40%;
    margin: auto;
    text-align: center;
    font-family: BookmanStd-MediumItalic;
    font-size: 1.7em;
    background: white;
    border: 10px solid white;
    border-radius: 30px;
`;

export const MessageDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: auto;
    width: 80%;
    border-bottom: 5px solid white;
`;

export const MessageFormButtonLink = styled(Link)`
    text-decoration: none;
    color: black;
`;