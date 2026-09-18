'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import portfolioArray from "./portfolioItem";

const Portfolio = () => {

    const [boxes, setBoxes] = React.useState(true);
    const [donut, setDonut] = React.useState(true);
    const [description, setDescription] = React.useState(true);
    const [descriptionString, setDescriptionString] = React.useState("");
    const [enlargedImage, setEnlargedImage] = React.useState("");
    const [isImage, setIsImage] = React.useState(false);

    const handleExpand = (name, isImage, descriptionString, toggle) => {
        setIsImage(isImage);
        setDescription(toggle);
        setDescriptionString(descriptionString);
        if (name != "close") {
            setEnlargedImage(name)
        }
    }

    const handleReturn = (toggle) => {
        setDescription(toggle);
    }

    return (
        <> 
        {description ? 
        <PortfolioHolder>
            {portfolioArray.map((item) => {
                return (
                <>
                <ObjectDisplay>
                    <>
                    <Title>{item.name}</Title>
                    {item.isImage ? 
                        <img id="image"  onClick={() => handleShowDescription(!description)} width="100%" height="100%" object-fit="scale-down" src={item.imageURL} alt="Empire Donuts Website Redesign" />
                        :
                        <video controls>
                            <source src={item.imageURL} />
                        </video>
                    }
                    <Expand onClick={() => handleExpand(item.imageURL, item.isImage, item.description, !description)}>EXPAND</Expand>
                    </>
                </ObjectDisplay>
                </>
                )
            })}
            <>
            </>
            </PortfolioHolder> 
            :
            <>
                <ObjectFullDisplay>
                {isImage ? 
                    <img id="image" width="100%" height="100%" object-fit="scale-down" src={enlargedImage} />
                :
                <>
                <video controls>
                    <source src={enlargedImage} />
                </video>
                </>
                }
                <description>{descriptionString}</description>
                </ObjectFullDisplay>
                <Expand onClick={() => handleReturn(!description)}>GO BACK</Expand>
            </>
            }
            </>
    )
}

const DonutDisplay = () => {
    return (
        <>
        <FigmaHolder 
            src="https://embed.figma.com/proto/c6mHsyyDaClcayaI8bOovy/Project-3?node-id=28-83&p=f&scaling=fit&content-scaling=fit&page-id=0%3A1&starting-point-node-id=28%3A83&embed-host=share" />           
        <Padding height="100px">WUAH</Padding>
        <ReturnButton >DESC</ReturnButton>
        </>
    );
}

const Padding = styled.div`
    height: 100%;
`;

const Expand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: darkcyan;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
`;

const Description = styled.div`
    padding-bottom: 50%;
`;

const FadedImage = styled.div`

    background-blend-mode: darken;
`;

const ObjectDisplay = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding-left: 1%;
    padding-top: 1%;
    height: 40%;
    width: 30%;
`;

const ObjectFullDisplay = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding-left: 1%;
    padding-top: 1%;
    height: 100%;
    width: 100%;
`;

const PortfolioHolder = styled.div`
    display: flex;
    flex-direction: row;
    height: 95vh;
`;

const FigmaHolder = styled.iframe`
    height: 80%;
    width: 60%;
    position: absolute;
    margin-top: 2%;
`;

const ReturnButton = styled.div`
    text-align: center;
    width: 20%;
    background-color: DarkSlateGrey;
`;


// :
// <>
// <img id="image" style={{opacity: 0.3}} onClick={handleShowDescription} width="100%" height="100%" object-fit="scale-down" src={item.imageURL} alt="Empire Donuts Website Redesign">                                      
// </img >
// <Description>{item.description}</Description>
// </>}

// old may reuse?
// {boxes ? <><LeftHalf>
//             <h2>Concept: </h2>
//             <p>Redesign of local donut shop "Empire Donuts"</p>
//             <h2>Info: </h2>
//             <p>Interactable Figma project made to mimic website functionality. Redesign with a focus on clarity, 
//                 efficient delivery of information for any user, and better displaying the high-quality graphics and
//                 images present on the official website.</p>
//             <h2>Notes: </h2>
//             <p>I love Empire Donuts and hope they improve their website</p>
//         </LeftHalf>
//         <RightHalf>
//             <img id="donut" onClick={handleExpandImage}
//             width="100%" height="100%" object-fit="scale-down" src="../donuts.png" alt="Empire Donuts Website Redesign"></img>
//         </RightHalf></> 
//         : 
//         <><FullWidth>
//             <ReturnButton id="return" onClick={handleReturn}>RETURN</ReturnButton>
//             { donut ? <DonutDisplay /> : <div></div> }
            
//         </FullWidth> 
//         </>}

export default Portfolio;