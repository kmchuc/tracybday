import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const TracyVideo = styled.video`
    display: flex;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const OpeningMessage = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
`;

export const OpeningMessageText = styled.p`
    display: flex;
    text-align: center;
    font-family: BookmanStd-DemiItalic;
    font-size: 70px;
    color: white;
`;

export const OpeningButton = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    height: 35px;
    width: 200px;
    border: 3px solid black;
    background: white;
    border-radius: 10px;

`;

export const OpeningButtonLink = styled(Link)`
    display: flex;
    position: absolute;
    align-content: center;
    font-family: Courier New;
    font-size: 25px;
    color: black;
    
    &.active {
        color: red;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;