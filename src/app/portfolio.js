'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import portfolioArray from "./portfolioItem";
import PortfolioSchool from "./portfolioschool";
import Shmucks from "./portfolioshmucks.js";
import Current from "./portfolioCurrent";

const Portfolio = () => {

    const [tabName, setTabName] = React.useState("");
    const [school, setSchool] = React.useState(false);
    const [capstone, setCapstone] = React.useState(true);
    const [current, setCurrent] = React.useState(false);

    //TODO
    //videos
    //images buttons bigger / color
    //contact info
    //links
    //second resume functionality

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
            <>
            <RowHolder>
            <LeftBuffer></LeftBuffer>
            <ButtonsHolder>
                <MenuDiv id="PortMenu">
                    {school ? <ActiveButton id="school" onClick={handlePortfolioTabButtons}>School Work</ActiveButton> : <Button id="school" onClick={handlePortfolioTabButtons}>School Work</Button>}
                    {capstone ? <ActiveMiddleButton id="capstone" onClick={handlePortfolioTabButtons}>Capstone</ActiveMiddleButton> : <MiddleButton id="capstone" onClick={handlePortfolioTabButtons}>Capstone</MiddleButton>}
                    {current ? <ActiveButton id="current" onClick={handlePortfolioTabButtons}>Current Work</ActiveButton> : <Button id="current" onClick={handlePortfolioTabButtons}>Current Work</Button>}
                </MenuDiv>  
            </ButtonsHolder>
            <RightBuffer>
                {/* this is a bit silly but it fixes a ~1px alignment issue so here it is */}
                <BorderHolderLol>
                    {capstone ? <LinkHolder>
                        <Link target="_blank" href="https://defeated-wizards.itch.io/shmucks">⎋ ITCH.IO Link</Link>
                    </LinkHolder>
                    : <></> }
                </BorderHolderLol>
            </RightBuffer>
            </RowHolder>
            </>
        )
    }

    return (
        <>
        <MenuButtons />
        {school ? <PortfolioSchool /> : <></>}
        {capstone ? <Shmucks /> : <></>}
        {current ? <Current /> : <></>}
        </>
    )
}

const MenuDiv = styled.div`
    height: 5vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(26, 32, 70);
`;

const BorderHolderLol = styled.div`
    width: 100%;
    height: 100%;
    border-left: 2px solid OrangeRed;
`;


const RowHolder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
`;

const LeftBuffer = styled.div`
    width: 20%;
    border-right: 2px solid OrangeRed;
    background-color: rgb(29, 29, 31);
`;


const ButtonsHolder = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const RightBuffer = styled.div`
    background-color: rgb(29, 29, 31);
    width: 45%;
`;

const Button = styled.div`
    height: 80%;
    
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-color: rgb(26, 32, 70);
    font-size: 20px;
    &:hover {
        background-color: rgba(95, 95, 95, 0.36);
        cursor: pointer;
    }
`;

const MiddleButton = styled.div`
    height: 80%;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-color: rgb(26, 32, 70);
    border-right: 2px solid OrangeRed;
    border-left: 2px solid OrangeRed;
    font-size: 20px;
    &:hover {
        background-color: rgba(95, 95, 95, 0.36);
        cursor: pointer;
    }
`;

const ActiveButton = styled.div`
    height: 80%;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #36A1E7;
    background-color: rgb(26, 32, 70);
    font-size: 20px;
    &:hover {
        background-color: rgba(95, 95, 95, 0.23);
        cursor: pointer;
    }
`;

const ActiveMiddleButton = styled.div`
    height: 80%;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #36A1E7;
    background-color: rgb(26, 32, 70);
    font-size: 20px;
    border-right: 2px solid OrangeRed;
    border-left: 2px solid OrangeRed;
    &:hover {
        background-color: rgba(95, 95, 95, 0.23);
        cursor: pointer;
    }
`;

const LinkHolder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 7%;
`;
const Link = styled.a`
    color: white;
    display: flex;
    flex-direction: column;
    width: 30%;
    &:hover {
        color: #36A1E7;
    }
`;


export default Portfolio;