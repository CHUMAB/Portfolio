'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

const AboutMe = () => {


    return (
        <>
        <AboutHolder>
            <ContentHolder>
            <ImageHolder id="CamImage" src="../CamImgCropped.png"></ImageHolder>
            <Title>ABOUT</Title>
            <BodyText></BodyText>
            </ContentHolder>
        </AboutHolder>
        </>
    )
}

const ImageHolder = styled.img`
    display: flex;
    width: 40%;
    height: 40%;
    border-radius: 1000px;
    margin-top: .5%;
    margin-bottom: .5%;
    margin-left: .5%;
`;
const Title = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    width: 60%;
    font-size: 30px;
`;
const BodyText = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    width: 60%;
    font-size: 30px;
`;
const AboutHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2%;
`;
const ContentHolder = styled.div`
    display: flex;
    width: 40%;
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