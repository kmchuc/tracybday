import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    ContentContainer
} from './styled';


const Content = () => {
    return(
        <ContentContainer>
            <div>
                <h1>Messages from people who love you!</h1>
            </div>
            <div>
                <h2>messages go here</h2>
            </div>
            <div>
                <div>
                    <Link to='/messageform'>Leave Tracy a birthday message!</Link>
                </div>
            </div>
        </ContentContainer>
    )
}

export default Content;