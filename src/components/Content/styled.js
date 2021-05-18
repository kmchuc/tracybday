import styled from 'styled-components';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
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
    font-family: BookmanStd-MediumItalic;
`;

export const ContentMessageDisplayContainer = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    height: 70%;
    width: 90%;
    border: 10px solid white;
    border-radius: 20px 20% 10%;
`;

export const ContentMessages = styled.div`
    display: flex;
    font-family: Courier New;
`;

export const MessageFormButtonContainer = styled.div`
    diplay: flex;
    height: 15%;
    width: 90%;
    align-self: center;
    border: 2px solid black;
`;