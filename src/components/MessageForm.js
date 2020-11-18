import React , { useState, useContext } from 'react';

const MessageForm = () => {
    const [message, setMessage] = useState("")

    async function addMessage() {
        try {
            const response = await fetch(api_path, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message)
            });

            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log("error", error);
        }
    }

    return(
        <div>
            <div>
                <h1>Leave Tracy a birthday message!</h1>
            </div>
            <form>
                <label for="message">Message:</label><br/>
                <input type='text' id='message' name='message'/>
                <label for="from">From:</label><br/>
                <input type='text'  id='from' name='from'/><br/>
                <br/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}