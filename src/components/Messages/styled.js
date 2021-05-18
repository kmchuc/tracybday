import styled from 'styled-components';

export const MessageFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

export const MessageFormTitleDiv = styled.div`
    display: flex;
    text-align: flex-end;
    width: 80%;
    margin: auto;
`;

export const MessageFormTitle = styled.h1`
    display: flex;
    margin-bottom: auto;
    font-family: BookmanStd-MediumItalic;
    font-size: 40px;
`;

export const MessageFormDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 80%;
    width: 80%;
    border: 10px solid black;
    border-radius: 3em;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 70%;
`;

export const MessageFormLabel = styled.label`
    font-family: BookmanStd-Medium;
    font-size: 2em;
`;

export const MessageInputBox = styled.textarea`
    height: 50%;
    resize: none;
    overflow: auto;
`;

export const MessageFromLabel = styled.label`
    font-family: BookmanStd-Medium;
    font-size: 2em;
`;

export const FromInput = styled.input`
    height: 20%;
`;

export const MessageFormButton = styled.button`
    font-family: BookmanStd-Medium;
    font-size: 1.5em;
    width: 13%;
    margin: auto;
    background-color: #84a98c;
`;