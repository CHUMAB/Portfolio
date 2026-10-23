'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import portfolioArray from "./portfolioItem";
import PortfolioSchool from "./portfolioschool";
import Shmucks from "./portfolioshmucks.js";

const Portfolio = () => {

    const [tabName, setTabName] = React.useState("");
    const [school, setSchool] = React.useState(false);
    const [capstone, setCapstone] = React.useState(true);
    const [current, setCurrent] = React.useState(false);

    const handlePortfolioTabButtons = (event) => {
        var clickedButton = event.target.id;

        setSchool(false);
        setCapstone(false);
        setCurrent(false);

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
                {school ? <ActiveButton id="school" onClick={handlePortfolioTabButtons}>School Work</ActiveButton> : <Button id="school" onClick={handlePortfolioTabButtons}>School Work</Button>}
                {capstone ? <ActiveButton id="capstone" onClick={handlePortfolioTabButtons}>Capstone</ActiveButton> : <Button id="capstone" onClick={handlePortfolioTabButtons}>Capstone</Button>}
                {current ? <ActiveButton id="current" onClick={handlePortfolioTabButtons}>Current Work</ActiveButton> : <Button id="current" onClick={handlePortfolioTabButtons}>Current Work</Button>}
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
    background-color: rgb(29, 29, 31);
`;

const Button = styled.div`
    height: 80%;
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
        background-color: rgba(95, 95, 95, 0.36);
        cursor: pointer;
    }
`;

const ActiveButton = styled.div`
    height: 80%;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-color: #36A1E7;
    margin-bottom: 15px;
    &:hover {
        background-color: rgba(95, 95, 95, 0.23)
        cursor: pointer;
    }
`;




export default Portfolio;