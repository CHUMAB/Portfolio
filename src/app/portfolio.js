'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import portfolioArray from "./portfolioItem";
import PortfolioSchool from "./portfolioSchool";
import Shmucks from "./portfolioShmucks.js";

const Portfolio = () => {

    const [tabName, setTabName] = React.useState("");
    const [school, setSchool] = React.useState(false);
    const [capstone, setCapstone] = React.useState(true);
    const [current, setCurrent] = React.useState(false);

    const handlePortfolioTabButtons = (event) => {
        //get the name of the button
        var clickedButton = event.target.id;

        //disable all of them
        setSchool(false);
        setCapstone(false);
        setCurrent(false);

        //switch case to enable the clicked button
        switch(clickedButton) {
            case "school":
                setSchool(true);
                break;
            case "capstone":
                setCapstone(true);
                break;
            case "current":
                setCurrent(true);
                break;
        }

    }

    const MenuButtons = () => {
        return (
            <MenuDiv id="PortMenu">
                <Button id="school" onClick={handlePortfolioTabButtons}>School Work</Button>
                <Button id="capstone" onClick={handlePortfolioTabButtons}>Capstone</Button>
                <Button id="current" onClick={handlePortfolioTabButtons}>Current Work</Button>
            </MenuDiv>  
        )
    }

    return (
        <>
        <MenuButtons />
        {school ? <PortfolioSchool /> : <></>}
        {capstone ? <Shmucks /> : <></>}
        </>
    )
}

const MenuDiv = styled.div`
    height: 5vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0.5%;
`;

const Button = styled.div`
    height: 4.4vh;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-color: rgb(26, 26, 26);
    margin-bottom: 15px;
    &:hover {
        background-color: rgb(26, 26, 26);
        cursor: pointer;
    }
`;



export default Portfolio;