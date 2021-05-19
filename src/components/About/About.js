import React from 'react';
import pic from './IMG_7732.JPG';
import {
    AboutContainer,
    AboutDiv,
    AboutTitleDiv,
    AboutTitle,
    DescriptionDiv,
    DescriptionText,
    ImageDiv,
    Image
} from './styled';

const About = () => {
    return(
        <AboutContainer>
            <AboutDiv>
                <AboutTitleDiv>
                    <AboutTitle><b>Happy Birthday Tracy!</b></AboutTitle>
                </AboutTitleDiv>
                <DescriptionDiv>
                    <DescriptionText>
                        <p>
                            Due to the Covid-19 pandemic, my sister and I weren't able to see each other for her 21st birthday. She's currently located in California, finishing up her last year in college. Separated by the Pacific Ocean, I decided to use my coding skills to make this little site for all her other friends to show their appreciation. My little sister is my hero. 

                            <br/>
                            <br/>
                            Tracy if you're reading this, happy birthday!!! I can't wait to see you and celebrate with you!
                            <br/>
                            <br/>
                            -Kim (sistah)
                        </p>
                    </DescriptionText>
                    <ImageDiv>
                        <Image src={pic} alt='pic' />
                    </ImageDiv>
                </DescriptionDiv>
            </AboutDiv>
        </AboutContainer>
    )
}

export default About;