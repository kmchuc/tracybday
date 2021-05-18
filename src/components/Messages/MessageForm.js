import React , { useState } from 'react';
import { Redirect } from 'react-router';
import {
    MessageFormContainer,
    MessageFormTitleDiv,
    MessageFormTitle,
    MessageFormDiv,
    Form,
    MessageFormLabel,
    MessageInputBox,
    MessageFromLabel,
    FromInput,
    MessageFormButton
} from './styled';

const MessageForm = () => {
    const [message, setMessage] = useState("")
    const [from, setFrom] = useState("")
    const [redirect, setRedirect] = useState()

    async function addMessage() {
        try {
            const response = await fetch("https://triviaknowledgeapi.herokuapp.com/api/addMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({message, "name":from})
            });

            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log("error", error);
        }
    }

    const submitFunction = () => {
        setRedirect('/content');
    };

    if (redirect) {
        return <Redirect push to='/content' />;
    }

    console.log('message', message)
    console.log('from', from)

    return(
        <MessageFormContainer>
            <MessageFormTitleDiv>
                <MessageFormTitle>Leave Tracy a birthday message!</MessageFormTitle>
            </MessageFormTitleDiv>
            <MessageFormDiv>
            <Form onSubmit={submitFunction}>
                <MessageFormLabel htmlFor="message">Message:</MessageFormLabel><br/>
                <MessageInputBox 
                    type='text' 
                    id='message' 
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                /><br/>
                <MessageFromLabel htmlFor="from">From:</MessageFromLabel><br/>
                <FromInput 
                    type='text'  
                    id='from' 
                    value={from} 
                    onChange={e => setFrom(e.target.value)}
                /><br/>
                <br/>
                <MessageFormButton 
                onClick={addMessage}
                disabled={!message || !from}>
                Submit
                </MessageFormButton>
            </Form>
            </MessageFormDiv>
        </MessageFormContainer>
    )
}

export default MessageForm;