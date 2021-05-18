import React , { useState } from 'react';
import {
    MessageFormContainer,
    MessageFormTitleDiv,
    MessageFormTitle,
} from './styled';

const MessageForm = () => {
    const [message, setMessage] = useState("")
    const [from, setFrom] = useState("")

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
    console.log('message', message)
    console.log('from', from)

    return(
        <MessageFormContainer>
            <MessageFormTitleDiv>
                <MessageFormTitle>Leave Tracy a birthday message!</MessageFormTitle>
            </MessageFormTitleDiv>
            <form>
                <label htmlFor="message">Message:</label><br/>
                <textarea type='text' id='message' value={message} onChange={e => setMessage(e.target.value)}/><br/>
                <label htmlFor="from">From:</label><br/>
                <input type='text'  id='from' value={from} onChange={e => setFrom(e.target.value)}/><br/>
                <br/>
                <button onClick={addMessage}>Submit</button>
            </form>
        </MessageFormContainer>
    )
}

export default MessageForm;