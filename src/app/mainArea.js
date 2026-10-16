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
import AboutMe from "./aboutMe";
import PortfolioSchool from './portfolioSchool';
import Portfolio from './portfolio';

const MainArea = () => {

    const [resume, setResume] = React.useState(false);
    const [runescape, setRunescape] = React.useState(false);
    const [about, setAbout] = React.useState(false);
    const [syllabus, setSyllabus] = React.useState(false);
    const [portfolio, setPortfolio] = React.useState(true);

    const handlePageSwitch = (event) => {
        //get the name of the button
        var clickedButton = event.target.id;

        //disable all of them
        setAbout(false);
        setResume(false);
        setPortfolio(false);
        setRunescape(false);

        //switch case to enable the clicked button
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
            <BufferDiv></BufferDiv>
            <Button id="About" onClick={handlePageSwitch} >ABOUT ME</Button>
            <Button id="Portfolio" onClick={handlePageSwitch}>PORTFOLIO</Button>
            <Button id="Resume" onClick={handlePageSwitch} >RESUME</Button>
            {/* <Button id="Runescape" onClick={handlePageSwitch} >RUNESCAPE</Button> */}
            {/* <Button className="rounded-t-lg"></Button> */}
        </MenuDiv>
        </MenuHolder>
        <MainAreaHolder id="MainAreaHolder">
            
            {about ?<HolderDiv><AboutMe /></HolderDiv> : <div></div>}
            {resume ? <HolderDiv><Resume /></HolderDiv> : <div></div>}
            {runescape ? <HolderDiv><Runescape /></HolderDiv> : <div></div>}
            {syllabus ? <HolderDiv><Syllabus /></HolderDiv> : <div></div>}
            {portfolio ? <HolderDiv><Portfolio /></HolderDiv> : <div></div>}
        </MainAreaHolder>
        </AreaHolder>
        </>
    )
}

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
    height: 100%;
    width: 100%;
`;

const MenuHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding-right: .5%;
    background-color: rgb(26, 32, 70);
`;

const BufferDiv = styled.div`
    display: flex;
    align-items: flex-start;
    text-align: center;
    width: 50%;
`;

const NameDiv = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 25%;
    margin-left: 2%;
    margin-top: .5%;
    margin-bottom: .5%;
    color: rgb(76, 183, 236);
    font-size: 28px;
    border-right: 2px solid OrangeRed;
`;

const MenuDiv = styled.div`
    height: 7vh;
    width: 100%;
    float: right;
    display: flex;
    flex-direction: row;
`;

const Button = styled.div`
    border-top:
    height: 4.4vh;
    border-right: 2px solid OrangeRed;
    border-left: 2px solid OrangeRed;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    margin-top: .5%;
    margin-bottom: .5%;
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
    height: 100vh;
    width: 100vw;
    background-color: rgb(30, 36, 56);
`;

export default MainArea;