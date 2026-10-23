'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

const Resume = () => {
    return (
        <> 
        <Background>
            <PDF class="pdf" 
            data="../RESUME-Youth.pdf"
            width="80%"
            height="100%">
            </PDF>
        </Background> 
        </>
    )
}

const Background = styled.div`
    height: 86vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(29, 29, 31);
`;

const PDF = styled.object`
    height: 98%;
    width: 80%;
    border-left: 2px solid orangered;
    border-right: 2px solid orangered;
    border-radius: 8px;
`;

export default Resume;