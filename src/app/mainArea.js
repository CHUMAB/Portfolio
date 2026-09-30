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
import Portfolio from './portfolio';

const MainArea = () => {

    const [resume, setResume] = React.useState(false);
    const [runescape, setRunescape] = React.useState(false);
    const [dashboard, setDashboard] = React.useState(true);
    const [syllabus, setSyllabus] = React.useState(false);
    const [portfolio, setPortfolio] = React.useState(false);

    const handlePageSwitch = (event) => {
        //get the name of the button
        var clickedButton = event.target.id;

        //disable all of them
        setDashboard(false);
        setResume(false);
        setPortfolio(false);

        //switch case to enable the clicked button
        switch(clickedButton) {
            case "Dashboard":
                setDashboard(true);
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
        <MenuDiv>
            <Button id="Dashboard" className="rounded-t-lg" onClick={handlePageSwitch} >DASHBOARD

            </Button>
            <Button id="Portfolio" className="rounded-t-lg" onClick={handlePageSwitch}>PORTFOLIO

            </Button>
            <Button id="Resume" className="rounded-t-lg" onClick={handlePageSwitch} >RESUME

            </Button>
            <Button id="Runescape" className="rounded-t-lg" onClick={handlePageSwitch} >RUNESCAPE

            </Button>
            
            <Button className="rounded-t-lg">

            </Button>
        </MenuDiv>
        <div>
            {dashboard ?<HolderDiv><Dashboard /></HolderDiv> : <div></div>}
            {resume ? <HolderDiv><Resume /></HolderDiv> : <div></div>}
            {runescape ? <HolderDiv><Runescape /></HolderDiv> : <div></div>}
            {syllabus ? <HolderDiv><Syllabus /></HolderDiv> : <div></div>}
            {portfolio ? <HolderDiv><Portfolio /></HolderDiv> : <div></div>}
        </div>
        </AreaHolder>
        </>
    )
}

const AreaHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 95vh;
    width: 95vw;
`;


const MenuDiv = styled.div`
    height: 5vh;
    width: 85vw;
    float: left;
    display: flex;
    flex-direction: row;
`;

const Button = styled.div`
    border-top:
    height: 4.4vh;
    border: 2px solid gray;
    width: 25%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-color: DarkSlateGrey;
    &:hover {
        background-color: rgb(26, 26, 26);
        border-bottom: 1px solid rgb(26, 26, 26);
        cursor: pointer;
    }
    &:active:not(:disabled) {
        background-color: rgb(26, 26, 26);
       border-bottom: 1px solid rgb(26, 26, 26);
    }
`;

const HolderDiv = styled.div`
    height: 85vh;
    width: 85vw;
`;

export default MainArea;