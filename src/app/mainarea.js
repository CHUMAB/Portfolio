'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import Schedule from './schedule';
import Runescape from './runescape';
import Dashboard from './dashboard';
import Syllabus from './syllabus';
import Resume from './resume';
import AboutMe from "./aboutme";
import PortfolioSchool from './portfolioschool';
import Portfolio from './portfolio';
import headerQuotes from "./HeaderQuotes";

export default function MainArea() {

    const [resume, setResume] = React.useState(false);
    const [runescape, setRunescape] = React.useState(false);
    const [about, setAbout] = React.useState(false);
    const [syllabus, setSyllabus] = React.useState(false);
    const [portfolio, setPortfolio] = React.useState(true);
    const [quote, setQuote] = React.useState("");

    const handlePageSwitch = (event) => {
        var clickedButton = event.target.id;
        console.log(clickedButton);
        setAbout(false);
        setResume(false);
        setPortfolio(false);
        setRunescape(false);

        switch(clickedButton) {
            case "About":
                setAbout(true);
                break;
            case "Resume":
                setResume(true);
                break;
            case "Portfolio":
                setPortfolio(true);
                break;
            case "Runescape":
                setRunescape(true);
                break;
        }
    }

    return (
        <>
        <AreaHolder id="areaholder">
        <MenuHolder id="MenuHolder">
            
        <MenuDiv id="MenuDiv">
            <NameDiv>CAM WATT</NameDiv>
             {portfolio ? <BufferDiv>Portfolio Navigation</BufferDiv> : <BufferDiv>{headerQuotes[Math.floor(Math.random() * headerQuotes.length)]}</BufferDiv>}
        
            


            <ButtonsHolder>
                {about ? <ActiveLeftButton id="About" onClick={handlePageSwitch}>ABOUT</ActiveLeftButton> : <LeftButton id="About" onClick={handlePageSwitch} >ABOUT</LeftButton> }
                {portfolio ? <ActiveButton id="Portfolio" onClick={handlePageSwitch}>PORTFOLIO</ActiveButton> : <Button id="Portfolio" onClick={handlePageSwitch}>PORTFOLIO</Button>}
                {resume ? <ActiveRightButton id="Resume" onClick={handlePageSwitch}>RESUME</ActiveRightButton> : <RightButton id="Resume" onClick={handlePageSwitch} >RESUME</RightButton>}
                {/* <Button id="Runescape" onClick={handlePageSwitch} >RUNESCAPE</Button> */}
                {/* <Button className="rounded-t-lg"></Button> */}
            </ButtonsHolder>
        </MenuDiv>
        </MenuHolder>
        <Background>
        <MainAreaHolder id="MainAreaHolder">
            
            {about ?<HolderDiv><AboutMe /></HolderDiv> : <div></div>}
            {resume ? <HolderDiv><Resume /></HolderDiv> : <div></div>}
            {runescape ? <HolderDiv><Runescape /></HolderDiv> : <div></div>}
            {syllabus ? <HolderDiv><Syllabus /></HolderDiv> : <div></div>}
            {portfolio ? <HolderDiv><Portfolio /></HolderDiv> : <div></div>}
        </MainAreaHolder>
        </Background>
        <Footer>
            <FooterText>This is a mobile UNfriendly website please email me at CamWattDev@gmail.com to discuss a mobile overhaul</FooterText>
            <FooterText>All work on this website developed by Cam Watt please be nice to me | © 2026 Cam Watt</FooterText>
        </Footer>
        </AreaHolder>
        
        </>
    )
}

const FooterText = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    color: rgba(247, 247, 248, 0.24);
    align-items: center;
    text-align: center;
    justify-content: center;
    
`;

const Background = styled.div`
    display: flex;
    height: 100%;
`;

const Footer = styled.div`
    display: flex;
    width: 100%;
    height: 7vh;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: rgb(26, 32, 70);
`;

const AreaHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 100vw;
`;

const MainAreaHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
`;

const MenuHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    background-color: rgb(26, 32, 70);
`;

const NameDiv = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 20%;
    margin-top: .5%;
    margin-bottom: .5%;
    color: rgb(76, 183, 236);
    font-size: 28px;
    border-right: 2px solid OrangeRed;
`;

const BufferDiv = styled.div`
    display: flex;
    text-align: center;
    width: 35%;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.69);
`;

const ButtonsHolder = styled.div`
    width: 45%;
    display: flex;
    flex-direction: row;
    margin-top: .5%;
    margin-bottom: .5%;
`;

const MenuDiv = styled.div`
    height: 7vh;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Button = styled.div`
    border-top:
    height: 100%;
    border-right: 2px solid OrangeRed;
    border-left: 2px solid OrangeRed;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 20px;
    &:hover {
        background-color: rgba(65, 65, 65, 0.21);
        border-bottom: 1px solid rgb(26, 26, 26);
        cursor: pointer;
    }
    &:active:not(:disabled) {
        background-color: rgb(26, 26, 26);
        border-bottom: 1px solid rgb(26, 26, 26);
    }
`;

const LeftButton = styled.div`
    border-top:
    height: 100%;
    border-left: 2px solid OrangeRed;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 20px;
    &:hover {
        background-color: rgba(65, 65, 65, 0.21);
        border-bottom: 1px solid rgb(26, 26, 26);
        cursor: pointer;
    }
    &:active:not(:disabled) {
        background-color: rgb(26, 26, 26);
        border-bottom: 1px solid rgb(26, 26, 26);
    }
`;

const RightButton = styled.div`
    border-top:
    height: 100%;
    border-right: 2px solid OrangeRed;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 20px;
    &:hover {
        background-color: rgba(65, 65, 65, 0.21);
        border-bottom: 1px solid rgb(26, 26, 26);
        cursor: pointer;
    }
    &:active:not(:disabled) {
        background-color: rgb(26, 26, 26);
        border-bottom: 1px solid rgb(26, 26, 26);
    }
`;

const ActiveButton = styled.div`
    border-top:
    height: 100%;
    border-right: 2px solid OrangeRed;
    border-left: 2px solid OrangeRed;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #36A1E7;
    font-size: 20px;
    &:hover {
        background-color: rgba(65, 65, 65, 0.21);
        border-bottom: 1px solid rgb(26, 26, 26);
        cursor: pointer;
    }
    &:active:not(:disabled) {
        background-color: rgb(26, 26, 26);
        border-bottom: 1px solid rgb(26, 26, 26);
    }
`;

const ActiveLeftButton = styled.div`
    border-top:
    height: 100%;
    border-left: 2px solid OrangeRed;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #36A1E7;
    font-size: 20px;
    &:hover {
        background-color: rgba(65, 65, 65, 0.21);
        border-bottom: 1px solid rgb(26, 26, 26);
        cursor: pointer;
    }
    &:active:not(:disabled) {
        background-color: rgb(26, 26, 26);
        border-bottom: 1px solid rgb(26, 26, 26);
    }
`;

const ActiveRightButton = styled.div`
    border-top:
    height: 100%;
    border-right: 2px solid OrangeRed;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #36A1E7;
    font-size: 20px;
    &:hover {
        background-color: rgba(65, 65, 65, 0.21);
        border-bottom: 1px solid rgb(26, 26, 26);
        cursor: pointer;
    }
    &:active:not(:disabled) {
        background-color: rgb(26, 26, 26);
        border-bottom: 1px solid rgb(26, 26, 26);
    }
`;

const HolderDiv = styled.div`
    height: 100%;
    width: 100vw;
    background-color: rgb(30, 36, 56);
`;

