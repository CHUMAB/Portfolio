'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

const Shmucks = () => {

    return (
        <>
        <ShmucksHolder>
            
        <UpperContentHolder>
            <ImageHolder id="shmucksrenderimage" src="../SHMUCKS_Render.png"></ImageHolder>
            <HalfTextArea id="textarea">
                <Title>OVERVIEW</Title><br />
                <Body>SHMUCKS was my capstone project for my Interactive Media Developer Diploma. I worked in a team of 3 with full creative freedom over the project.<br /><br />
                SHMUCKS was pitched as a Real Time Stratagy game with the goal to evolve in to having Roguelike elements. The core concept was to be able to simulate large-scale
                battles with hundreds of units by pushing out optimization skills as far as we could. 
                <br /></Body>
                <ParagraphBreak></ParagraphBreak>
                <Body>The version we presented at the deadline took the form of a wave-based
                battle simulator - a change from the original more adventure-focused gameplay loop, a departure that made the game easier to show off and demonstrate, but which
                also had the game feel like it's strengths were much more fully on display. <br /><br />
                </Body>
                <Body><br /><br />
                </Body>
            </HalfTextArea>
        </UpperContentHolder>
        <LowerContentHolder>
            <FullTextArea id="textarea">
                <Title>CORE CONCEPTS</Title><br />
                <Body>
                    These are the concepts we learned from scratch, or built upon our learning for:
                </Body>
                <ListBody>
                - Behaviour Trees<br />
                - Inheritance<br />
                - Interfaces<br />
                - Unity VFX<br />
                - Performant 3D models<br />
                - Scaling Unity NavMesh to work with hundreds of units<br />
                - Interconnected manual & automatic unit control<br />
                - Randomized stat and name distributions<br />
                </ListBody>
                
            </FullTextArea>
            <FullTextArea id="textarea">
                <Title>SYSTEMS</Title><br />
                <Body>
                The project is built around a handful of core systems including:<br />
                </Body>
                <ListBody>
                - Unit movement, both manual and automatic<br />
                - Combat - including spellcasters, melee, and ranged units<br />
                - Decision-making and positioning for all units<br />
                - Unit spawning and wave-based functionality<br />
                - Unit stats, names, and class randomization<br />
                - UI overlay displaying curent wave information, and individual unit stat display<br />
                - Interfaces<br />
                </ListBody>
                
            </FullTextArea>
            <FullTextArea id="textarea">
                <Title>FUTURE</Title><br />
                <Body>
                We are interested in expanding on the game in a few ways:<br />
                </Body>
                <ListBody>
                - Roguelike upgrades between waves<br />
                - Expanding on the wave-based system<br />
                - Many more planned classes with unique abilities<br />
                - Additional gamemode with exploration focus<br />
                - Many more enemy types and bosses<br />
                - UI overhaul<br />
                - Additional unit variations, costumes, weapon visuals<br />
                </ListBody>
                
            </FullTextArea>
        </LowerContentHolder>
        </ShmucksHolder>
        </>
    )
}
const LinkHolder = styled.div`
    width: 100%;
    display: flex;
`;
const Link = styled.a`
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 30%;
    &:hover {
        color: #36A1E7;
    }
`;

const ParagraphBreak = styled.div`
    height: 20px;;
`;
const ShmucksHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgb(29, 29, 31);
`;

const Title = styled.div`
    display: flex;
    width: 100%;
    background-color: rgb(29, 29, 31);
    font-size: 30px;
    font-weight: bold;
    color: #36A1E7;
`;

const Body = styled.div`
    display: flex;
    width: 100%;
    background-color: rgb(29, 29, 31);
    
`;

const ListBody = styled.div`
    display: flex;
    width: 100%;
    background-color: rgb(29, 29, 31);
    padding-left: 5%;
`;

const UpperContentHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: rgb(29, 29, 31);
`;

const LowerContentHolder = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: rgb(29, 29, 31);
`;

const HalfTextArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: .5%;
    margin-bottom: .5%;
    margin-left: .5%;
`;
const FullTextArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: .5%;
    margin-bottom: .5%;
    margin-left: .5%;
`;

const ImageHolder = styled.img`
    display: flex;
    width: 55%;
    height: 100%;
    border-radius: 8px;
    margin-top: .5%;
    margin-bottom: .5%;
    margin-left: .5%;
`;

const SteamImageHolder = styled.img`
    display: flex;
    width: 80%;
    height: 100%;
    border-radius: 8px;
    margin-top: .5%;
    margin-bottom: .5%;
    margin-left: .5%;
`;

export default Shmucks;