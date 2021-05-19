import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #98c1d9;
`;

export const AboutDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    height: 80%;
    width: 80%;
`;

export const AboutTitleDiv = styled.div`
    dislay: flex;
    text-align: flex-start;
    height: 15%;
    width: 100%;
`;

export const AboutTitle = styled.h1`
    font-family: Courier New;
    font-size: 2.5em;
`;

export const DescriptionDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 80%;
    width: 100%;
`;

export const DescriptionText = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    font-family: Courier New;
    font-size: 1.5em;
    align-items: center;
`;

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 50%;
    align-items: center;
`;

export const Image = styled.img`
    height: 60%;
    width: 90%;
    object-fit: cover;
`;