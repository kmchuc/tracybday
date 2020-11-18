import React from 'react';
import styled from 'styled-components';
import Tracyvideo from '../video/Tracyvideo.mp4';
import { Link } from 'react-router-dom';
import {
    HomePageContainer,
    TracyVideo,
    OpeningMessage,
    OpeningMessageText,
    OpeningButton,
    OpeningButtonLink
} from './styled'

const Homepage = () => {
    return(
        <HomePageContainer>
            <TracyVideo autoPlay loop muted>
                <source src={Tracyvideo} type='video/mp4'/>
            </TracyVideo>
            <OpeningMessage>
                <OpeningMessageText>Happy Birthday Tracy!</OpeningMessageText>
                <OpeningButton><OpeningButtonLink to='/content'>Let's Party!</OpeningButtonLink></OpeningButton>
            </OpeningMessage>
            
        </HomePageContainer>
    )
}
export default Homepage;