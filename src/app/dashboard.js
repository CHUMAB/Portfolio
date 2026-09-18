'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';



const Dashboard = () => {

    const arrow = ">";
    const [linkArray, setLinkArray] = React.useState([]);


    React.useEffect(() => {
        var links = []

        links.push(
                    {"key": 2, "link": "https://online.camosun.ca/d2l/home", "site": "D2L"},
                    {"key": 3, "link": "https://colss-prod.ec.camosun.ca/Student/?hideProxyDialog=false", "site": "MyCamosun"},
                    {"key": 4, "link": "https://github.com/CHUMAB", "site": "GitHub"},
                    {"key": 5, "link": "https://defeated-wizards.itch.io/shmucks", "site": "SHMUCKS"} 
                );

        setLinkArray(links);
    }, []);

    // React.useEffect(() => {
    // }, [linkArray]);
    


    return(
        <DashboardDiv  key={(Math.random()*(1, 10000))}>
            <Module  key={(Math.random()*(1, 10000))}>
                {linkArray.map((item) => {
                     return <Link target="_blank" key={item.key} href={item.link}>{arrow} ${item.site}</Link>
                })}
            </Module>
            <Module>
                
            </Module>
        </DashboardDiv>
    )
}

const DashboardDiv = styled.div`
    height: 70vh;
    width: 60vw;
`;

const Module = styled.div`
    height: 15vh;
    width: 50vw;
    color: lime;
    display: flex;
    flex-direction: column;
`;

const Link = styled.a`
    &:hover {
        color: red;
    }
`;
export default Dashboard;