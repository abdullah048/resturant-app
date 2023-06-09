import React from "react";
import { AboutUsContainer, AboutUsContentAbout, AboutUsContentContainer, AboutUsContentHistory, AboutUsContentKnife, BackgroundImage, OverlayContainer, StyledPara } from "../../styles/Aboutus.styled";
import images from "../../constants/images";
import { CustomButton, HeadTextCormorant } from "../../styles/utils/Utils.styled";

const AboutUs = () => (
    <AboutUsContainer id='about'>
        <OverlayContainer>
            <BackgroundImage src={images.G} alt='Background Image' />
        </OverlayContainer>
        <AboutUsContentContainer>
            <AboutUsContentAbout>
                <HeadTextCormorant>About Us</HeadTextCormorant>
                <img src={images.spoon} alt="spoon" />
                <StyledPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam eveniet mollitia vero quas? Autem doloremque delectus quia assumenda facere?</StyledPara>
                <CustomButton>Know More</CustomButton>
            </AboutUsContentAbout>
            <AboutUsContentKnife>
                <img src={images.knife} alt="knife-image" />
            </AboutUsContentKnife>
            <AboutUsContentHistory>
                <HeadTextCormorant>Our History</HeadTextCormorant>
                <img src={images.spoon} alt="spoon" />
                <StyledPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam eveniet mollitia vero quas? Autem doloremque delectus quia assumenda facere?</StyledPara>
                <CustomButton>Know More</CustomButton>
            </AboutUsContentHistory>
        </AboutUsContentContainer>
    </AboutUsContainer>
);

export default AboutUs;

