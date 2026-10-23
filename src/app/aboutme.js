'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

const AboutMe = () => {


    return (
        <>
        <FullPage>
        <AboutHolder>
            <ContentHolder>
                <ImageHolder id="CamImage" src="../CamImgCropped.png"></ImageHolder>
                <Column>
                <Title>ABOUT ME<br /></Title>
                <BodyText>Hi! My name is Cam, I am a recent graduate of the Interactive Media Developer program at Camosun College. My studies focused on programming, 2D and 3D art and animation, video game development, 
                    UI/UX design, as well as web development. I have a basic understanding of database management, cybersecurity, and computer mathamatics </BodyText>
                </Column>
            </ContentHolder>
            
        </AboutHolder>
        <AboutHolder>
            <LowerBodyText>
                Since graduation, I have been creating my own projects in Unity, primarily focusing on sharpening my programming skills, creating a distinct art style in 3D, and expanding my understanding of shaders.
                I have a love for RPG adventure games, and want to create a game and a world that are entirely my own. Outside of my own projects, I look forward to working with others in the industry to advance my understanding
                and create games and media.
                <br />
            </LowerBodyText>
        </AboutHolder>
        <AboutHolder>
            <LowerBodyText>
                I tolerate webdev overall and even enjoy some aspects of it. Javascript was the language that showed me just how much I could achieve with programming, and learning React has streamlined creating this website
                significantly. Programming this website was a fun project, but I find designing is far less in other mediums.
                <br />
            </LowerBodyText>
        </AboutHolder>
        </FullPage>
        </>
    )
}
const FullPage = styled.div`
    display: flex;
    height: 86vh;
    flex-direction: column;
    align-items: center;
    background-color: rgb(29, 29, 31);
`;
const ImageHolder = styled.img`
    display: flex;
    width: 30%;
    height: 30%;
    border-radius: 1000px;
    margin-top: .5%;
    margin-bottom: .5%;
    margin-left: .5%;
`;
const Title = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 30px;
`;
const Column = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-size: 30px;
`;
const BodyText = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 20px;
    margin-left: 2%;
`;
const LowerBodyText = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    width: 60%;
    font-size: 20px;
    margin-left: 2%;
`;
const AboutHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-top: 2%;
`;
const ContentHolder = styled.div`
    display: flex;
    width: 60%;
`;
const SpaceFiller = styled.div`
    display: flex;
    height: 100vh;
`;
const TextArea = styled.div`
    display: flex;
    width: 35%;
    height: 100%;
    color: white;
    margin-top: .5%;
    margin-bottom: .5%;
    margin-left: .5%;
`;
export default AboutMe;