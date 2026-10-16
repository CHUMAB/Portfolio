'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

const Shmucks = () => {

    return (
        <>
        <ShmucksHolder>
            <ImageHolder id="shmucksrenderimage" src="../SHMUCKS_Render.png"></ImageHolder>
        <TextArea id="textarea">
            <h1>SHMUCKS<br />
            SHMUCKS is my capstone project for my Interactive Media Developer diploma. I worked in a team of 3 with full creative freedom over the project.<br /><br />
            SHMUCKS was pitched as a Real Time Stratagy game with the goal to evolve in to having Roguelike elements. The core concept was to be able to simulate large-scale
            battles with hundreds of units by pushing out optimization skills as far as we could.<br /><br />
            Core concepts explored:<br />
            - Behaviour Trees<br />
            - Inheritance<br />
            - Interfaces<br />
            - Scaling Unity NavMesh to work with hundreds of units<br />
            - Performant <br />
            - Unity VFX<br />
            - Highly performant 3D models<br />
            - Interconnected manual & automatic unit control<br />
            - Randomized stat and name distributions<br />
            </h1>
            <h2></h2>
        </TextArea>
        </ShmucksHolder>
        </>
    )
}
const ShmucksHolder = styled.div`
    display: flex;
    width: 100%;
    background-color: rgb(31, 37, 74);
    border-radius: 8px;
    border: 1px solid white;
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



const ImageHolder = styled.img`
    display: flex;
    width: 65%;
    height: 100%;
    border-radius: 8px;
    margin-top: .5%;
    margin-bottom: .5%;
    margin-left: .5%;
`;

export default Shmucks;