import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ContentContainer,
    ContentTitle,
    ContentTitleText,
    ContentMessageDisplayContainer,
    MessageFormButtonContainer,
    ContentMessages
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
            </ContentTitle>
            <ContentMessageDisplayContainer>
                <div>
                {allMessages.map((messages, index) => {
                    return(
                        <ContentMessages key={index}>
                            <div>
                                <p>{ messages.message }</p>
                                <p>{ messages.name }</p>
                            </div> 
                        </ContentMessages>)
                })}
                </div>
            </ContentMessageDisplayContainer>
            <MessageFormButtonContainer>
                <div>
                    <Link to='/messageform'>Leave Tracy a birthday message!</Link>
                </div>
            </MessageFormButtonContainer>
        </ContentContainer>
    )
}

export default Content;