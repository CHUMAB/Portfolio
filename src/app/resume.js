'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

const Resume = () => {




    return (
        <>  
            <h1>GAMER</h1>
            <object class="pdf" 
            data="../RESUME.pdf"
            width="100%"
            height="100%">
            </object>
        </>
    )
}


export default Resume;