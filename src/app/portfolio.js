'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import portfolioArray from "./portfolioItem";

const Portfolio = () => {

    const [expand, setExpand] = React.useState(true);
    const [description, setDescription] = React.useState(true);
    const [descriptionString, setDescriptionString] = React.useState("Read More");
    const [enlargedImage, setEnlargedImage] = React.useState("");
    const [isImage, setIsImage] = React.useState(false);
    const [isImageSlideshow, setIsImageSlideshow] = React.useState(false);
    const [slideshowImages, setSlideshowImages] = React.useState([]);
    const [isFigma, setIsFigma] = React.useState(false);
    const [videoAndSlideshowSwitch, setVideoAndSlideshowSwitch] = React.useState(false);
    const [imageIndex, setImageIndex] = React.useState(0);

    const handleExpand = (name, isImage, descriptionString, isFigma, slideshow, toggle) => {
        if (slideshow == undefined) {
            setIsImageSlideshow(false);
        }
        else {
            setIsImageSlideshow(true)
            setSlideshowImages(slideshow);
        }
        setIsImage(isImage);
        setExpand(toggle);
        setIsFigma(isFigma)
        setDescriptionString(descriptionString);
        if (name != "close") {
            setEnlargedImage(name)
        }
    }

    const handleReturn = (desc) => {
        setExpand(desc);
    }

    const HandleDescription = (desc) => {
        setDescriptionString(desc);
    }

    const HandleSlideshow = (index, array, next) => {
        if (next = true) {
            index += 1;

            if (index > array.length - 1) {
            index = 0;
            }
        }
        else if (next = false) {
            index -= 1;

            if (index < 0) {
            index = array.length;
            }
        }
        setImageIndex(index);
    }

    const handleVideoImagesSwitch = () => {
        setVideoAndSlideshowSwitch(!videoAndSlideshowSwitch)
    }

    const handleShowDescriptions = () => {
        setDescription(!description);
    }

    return (
        <> 
        {expand ? 
        <>
        <ShowDescriptionButton onClick={handleShowDescriptions}>Show Descriptions</ShowDescriptionButton>
        <PortfolioHolder>
            
            {portfolioArray.map((item) => {
                return (
                <>
                <ObjectDisplay>
                    <>
                    <Title>{item.name}</Title>
                    {item.isImage ? 
                    <>
                        {item.setThumbnailImage ? 
                        <img id="image" width="100%" height="100%" object-fit="scale-down" src={item.slideshow[Math.floor(Math.random() * item.slideshow.length)]} alt="" />

                        : <img id="image" width="100%" height="100%" object-fit="scale-down" src={item.imageURL} alt="" />
                        }</>
                        :
                        <>
                        {item.setThumbnailImage ? 
                        <img id="image" width="100%" height="100%" object-fit="scale-down" src={item.slideshow[Math.floor(Math.random() * item.slideshow.length)]} alt="" />     
                            : 
                        <video loop>
                            <source src={item.imageURL} type="video/mp4"/>
                        </video>
                        }</>
                        
                    }
                    <Expand onClick={() => handleExpand(item.imageURL, item.isImage, item.description, item.isFigma, item.slideshow, !expand)}>EXPAND</Expand>
                    {description ? <Description>{item.description}</Description> : <></>}
                    
                    </>
                </ObjectDisplay>
                </>
                )
            })}
            <>
            </>
        </PortfolioHolder> </>
        :
        <>
            <ObjectFullDisplay>
            <Return onClick={() => handleReturn(!expand)}>GO BACK</Return>
            {isImage ? 
                
                <>
                {isFigma ?
                    //might only have one figma link but want it on the portfolio
                    <>
                    <FigmaHolder 
                    src="https://embed.figma.com/proto/c6mHsyyDaClcayaI8bOovy/Project-3?node-id=28-83&p=f&scaling=fit&content-scaling=fit&page-id=0%3A1&starting-point-node-id=28%3A83&embed-host=share" />           
                    </>
                    :
                    //images go here
                    <>
                    {isImageSlideshow ?
                    <>
                        <ImageHolder id="image" src={slideshowImages[imageIndex]} />
                        <ButtonHolder>
                        <PrevButton onClick={() => HandleSlideshow(imageIndex, slideshowImages, true)}>PREV</PrevButton>
                        <NextButton onClick={() => HandleSlideshow(imageIndex, slideshowImages, false)}>NEXT</NextButton>
                        
                        </ButtonHolder>
                    </>
                        :
                        <ImageHolder id="image"  src={enlargedImage} />
                    }
                    </>
                }
                </>
                :
                //end of isImage - videos go here
                
                <>
                {isImageSlideshow ?
                <>
                
                    {videoAndSlideshowSwitch ?
                    //some videos have an image or images attached - they just go here too
                    <>
                        <ImageHolder id="image" src={slideshowImages[imageIndex]} />
                        <ButtonHolder>
                        <PrevButton onClick={() => HandleSlideshow(imageIndex, slideshowImages, true)}>PREV</PrevButton>
                        <NextButton onClick={() => HandleSlideshow(imageIndex, slideshowImages, false)}>NEXT</NextButton>
                        </ButtonHolder>
                        <ViewImagesButton onClick={() => handleVideoImagesSwitch()}>View Video</ViewImagesButton>
                    </> 
                    ://videoAndSlideshowSwitch false
                    <>
                    <video controls loop >
                        <source src={enlargedImage} type="video/mp4"/>
                    </video>
                    <ViewImagesButton onClick={() => handleVideoImagesSwitch()}>View Images</ViewImagesButton></>
                    }
                </>
                ://isImageSlideshow false
                <>
                <video controls loop >
                    <source src={enlargedImage} type="video/mp4"/>
                </video>
                </>
                }
            </>
            }
                
                
            </ObjectFullDisplay>
            
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

const ButtonHolder = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: auto;
`;

const NextButton = styled.div`
    background-color: blue;
    width: 50%;
    float: right;
    text-align: center;
    padding-left:
`;

const PrevButton = styled.div`
    background-color: Green;
    width: 50%;
    text-align: center;
`;

const ShowDescriptionButton = styled.div`
    background-color: Green;
    margin: auto;
    width: 50%;
    text-align: center;
`;

const ViewImagesButton = styled.div`
    background-color: orange;
    width: 50%;
    float: right;
    text-align: center;
    padding-left:
`;

const Expand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: darkcyan;
`;

const Return = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
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
    width: 90%;
`;

const ImageHolder = styled.img`
    width: 90%;
    align-items: center;
`;

const ObjectDisplay = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding-left: 1%;
    padding-top: 1%;
    
    width: 30%;
`;

const ObjectFullDisplay = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    color: white;
    padding-top: 1%;
    height: 90%;
    width: 90%;
`;

const PortfolioHolder = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
export default Portfolio;