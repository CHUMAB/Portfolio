'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

const Resume = () => {

    const [gameDev, setGameDev] = React.useState(true);
    const [youthWork, setYouthWork] = React.useState(false);

    const handleSwap = (event) => {
        var clickedButton = event.target.id;
        setGameDev(false);
        setYouthWork(false);

        switch(clickedButton) {
            case "game":
                setGameDev(true);
                break;
            case "youth":
                setYouthWork(true);
                break;
        }

    }

    return (
        <> 
        <Background>
            <ButtonsHolder>
                <InfoText>GENERAL resume for youth work and game dev<br /> feel free to download the PDF for the full size</InfoText>
                {gameDev ? <SelectedButton>Game Dev</SelectedButton> : <Button id="game" onClick={handleSwap}>Game Dev</Button> }
                {youthWork ? <SelectedButton>Youth Work</SelectedButton> : <Button id="youth" onClick={handleSwap}>Youth Work</Button> }
            </ButtonsHolder>
            {gameDev ? 
            <PDFHolder>
                <PDF class="pdf" 
                data="../RESUME-GameDev.pdf"
                width="80%"
                height="100%">
                </PDF>
            </PDFHolder> : <></>
            }
            {youthWork ? 
            <PDFHolder>
                <PDF class="pdf" 
                data="../RESUME-Youth.pdf"
                width="80%"
                height="100%">
                </PDF>
            </PDFHolder> : <></>
            }
            
        </Background> 
        </>
    )
}

const ButtonsHolder = styled.div`
    height: 10%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
`;

const Button = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(19, 24, 37);
    margin-left: 1%;
    margin-right: 1%;
    padding-left: 1%;
    padding-right: 1%;
    color: white;
    border-bottom: 2px solid #36A1E7;
    border-top: 2px solid #36A1E7;
    border-radius: 8px;
    &:hover {
        background-color: rgba(19, 24, 37, 0.08);
        border-bottom: 2px solid orangered;
        border-top: 2px solid orangered;
        cursor: pointer;
    }
`;

const SelectedButton = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(19, 24, 37);
    margin-left: 1%;
    margin-right: 1%;
    padding-left: 1%;
    padding-right: 1%;
    color: #36A1E7;
    border-bottom: 2px solid #36A1E7;
    border-top: 2px solid #36A1E7;
    border-radius: 8px;
    
    &:hover {
        background-color: rgba(19, 24, 37, 0.08);
        border-bottom: 2px solid orangered;
        border-top: 2px solid orangered;
        cursor: pointer;
    }
`;

const InfoText = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(19, 24, 37);
    margin-left: 1%;
    margin-right: 1%;
    border-radius: 8px;
    color: white;
    text-align: center;
`;

const Background = styled.div`
    height: 110vh;
    display: flex;
    align-items: center;
    background-color: rgb(29, 29, 31);
    flex-direction: column;
`;

const PDFHolder = styled.div`
    display: flex;
    height: 90vh;
    width: 80%;
    border-left: 2px solid orangered;
    border-right: 2px solid orangered;
    border-radius: 8px;
    margin-bottom: 1%;
    margin-top: .5%;
`;

const PDF = styled.object`
    display: flex;
    height: 100%;
    width: 100%;
    border-left: 2px solid orangered;
    border-right: 2px solid orangered;
    border-radius: 8px;
`;

export default Resume;