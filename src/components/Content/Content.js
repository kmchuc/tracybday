import React, { useEffect, useState } from 'react';
import {
    ContentContainer,
    ContentTitle,
    ContentTitleText,
    WhyDiv,
    WhyLink,
    ContentMessageDisplayContainer,
    MessageFormButtonContainer,
    ContentMessages,
    MessageDiv,
    MessageFormButtonLink
} from './styled';

const Content = () => {

    const [allMessages, setallMessages] = useState([])

    async function getMessage() {
        try {
            const response = await fetch("https://triviaknowledgeapi.herokuapp.com/api/getMessage")
            const data = await response.json();
            setallMessages(data)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getMessage();
    }, []);

    console.log(allMessages);

    return(
        <ContentContainer>
            <ContentTitle>
                <ContentTitleText>Messages from your #1 fans</ContentTitleText>
                <WhyDiv>
                    <WhyLink to='/about'>About</WhyLink>
                </WhyDiv>
            </ContentTitle>
            <ContentMessageDisplayContainer>
                {allMessages.map((messages, index) => {
                    return(
                        <ContentMessages key={index}>
                            <MessageDiv>
                                <p><b>Message: </b>{ messages.message }</p>
                                <p><b>From: </b>{ messages.name }</p>
                            </MessageDiv>
                        </ContentMessages>)
                })}
            </ContentMessageDisplayContainer>
            <MessageFormButtonContainer>
                <MessageFormButtonLink to='/messageform'>Leave Tracy a birthday message!</MessageFormButtonLink>
            </MessageFormButtonContainer>
        </ContentContainer>
    )
}

export default Content;