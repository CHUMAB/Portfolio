'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import Renders from './currentItems.js'

const Current = () => {

    return (
        <>
            <MainHolder>
                <PageHeader>
                    This page is under construction - as I make more things that are worth showing they will go here. <br />
                    I am happy to talk about my solo game if you ask - it is currently extremely in development. <br />
                    For now, here is a cool test render of a mountain in an ocean I made
                    
                </PageHeader>
                <ItemHolder>
                {/* {testData.map((item) => {
                    return (
                        <>
                        <ObjectHolder>
                            <div>{item.name}</div>
                        </ObjectHolder>
                        </>
                    )
                })} */}
                <ImageHolder src={Renders[2].imageURL}></ImageHolder>
                
                </ItemHolder>
            </MainHolder>
        </>
    )
}


const MainHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    background-color: rgb(29, 29, 31);
`;

const PageHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 80%;
    height: 10%;
    background-color: OrangeRed;
`;

const ItemHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 80%;
    background-color: rgb(29, 29, 31);
`;

const ObjectHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 40%;
    background-color: rgb(29, 29, 31);
`;

const ImageHolder = styled.img`
    width: 95%;
    height: 100%;
    border-radius: 8px;
`;

export default Current;