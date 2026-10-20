'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import portfolioArray from "./portfolioItem";

const PortfolioSchool = () => {

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

    const handleExpand = (name, isImage, descriptionString, isFigma, slideshow, expandToggle) => {
        if (slideshow == undefined) {
            setIsImageSlideshow(false);
        }
        else {
            setIsImageSlideshow(true)
            setSlideshowImages(slideshow);
        }
        setIsImage(isImage);
        setExpand(expandToggle);
        setIsFigma(isFigma);
        setImageIndex(0);
        setDescriptionString(descriptionString);
        if (name != "close") {
            setEnlargedImage(name);
        }
    }

    const handleReturn = (desc) => {
        setExpand(desc);
    }

    const HandleSlideshow = (index, array, next) => {
        console.log("INDEX: "+index)
        console.log("array length: "+array.length)
        if (next) {
            index += 1;

            if (index > array.length - 1) {
            index = 0;
            }
        }
        else if (!next) {
            index -= 1;

            if (index < 0) {
            index = array.length - 1;
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
        <FullPageHolder>
        <>
        
        {expand ? 
        <>
        {description ? <ShowDescriptionButton onClick={handleShowDescriptions}>Hide Descriptions</ShowDescriptionButton>
        : <ShowDescriptionButton onClick={handleShowDescriptions}>Show Descriptions</ShowDescriptionButton>}
        <PortfolioHolder>
            
            {portfolioArray.map((item) => {
                return (
                <>
                <ObjectDisplay>
                    <>
                    <Title>{item.name}</Title>
                    <div>{item.tags}</div>
                    {item.isImage ? 
                    <>
                        {item.setThumbnailImage ? 
                        <ImageHolder id="image" src={item.slideshow[Math.floor(Math.random() * item.slideshow.length)]} alt="" />

                        : <ImageHolder id="image" src={item.imageURL} alt="" />
                        }</>
                        :
                        <>
                        {item.setThumbnailImage ? 
                        <ImageHolder id="ImageHolder" src={item.slideshow[Math.floor(Math.random() * item.slideshow.length)]} alt="" />     
                            : 
                        <VideoHolder loop>
                            <source src={item.imageURL} type="video/mp4"/>
                        </VideoHolder>
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
            <ObjectFullDisplay id="ObjectFullDisplay">
            <ExpandButtonsRow id="ExpandButtonsRow">
                <Return onClick={() => handleReturn(!expand)}>GO BACK</Return>
                {isImageSlideshow ? <ImgIndexHolder>{imageIndex + 1} / {slideshowImages.length}</ImgIndexHolder> : <></>}
                {videoAndSlideshowSwitch ? <ViewImagesButton onClick={() => handleVideoImagesSwitch()}>View Video</ViewImagesButton> : <ViewImagesButton onClick={() => handleVideoImagesSwitch()}>View Images</ViewImagesButton>}
                
            </ExpandButtonsRow>
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
                        <SlideshowHolder>
                            <PrevButton onClick={() => HandleSlideshow(imageIndex, slideshowImages, false)}>⮜</PrevButton>
                            <ImageHolder id="image" src={slideshowImages[imageIndex]} />
                            <NextButton onClick={() => HandleSlideshow(imageIndex, slideshowImages, true)}>⮞</NextButton>
                        </SlideshowHolder>
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
                        
                        <SlideshowHolder>
                            <PrevButton onClick={() => HandleSlideshow(imageIndex, slideshowImages, false)}>⮜</PrevButton>
                            <ImageHolder id="image" src={slideshowImages[imageIndex]} />
                            <NextButton onClick={() => HandleSlideshow(imageIndex, slideshowImages, true)}>⮞</NextButton>
                        </SlideshowHolder>
                    </> 
                    ://videoAndSlideshowSwitch false
                    <>
                    <VideoHolder controls loop >
                        <source src={enlargedImage} type="video/mp4"/>
                    </VideoHolder>
                    </>
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
        </FullPageHolder>
    )
}

const FullPageHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgb(30, 36, 56);
    padding-bottom: 1%;
`;

const ButtonHolder = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: auto;
    margin-top: 1%;
`;

const MenuDiv = styled.div`
    height: 5vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0.5%;
`;
//menu buttons
const Button = styled.div`
    height: 4.4vh;
    border: 1px solid gray;
    width: 25%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-color: rgb(26, 26, 26);
    margin-bottom: 15px;
    &:hover {
        background-color: rgb(26, 26, 26);
        cursor: pointer;
    }
`;

const NextButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(56, 56, 56, 0.29);
    width: 3%;
    text-align: center;
    height: 20%;
    margin-top: 20%;
    font-size: 35px;
    &:hover {
        background-color: rgba(135, 135, 135, 0.29);
        cursor: pointer;
    }
`;

const PrevButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(56, 56, 56, 0.29);
    width: 3%;
    text-align: center;
    height: 20%;
    margin-top: 20%;
    font-size: 35px;
    &:hover {
        background-color: rgba(135, 135, 135, 0.29);
        cursor: pointer;
    }
`;

const ShowDescriptionButton = styled.div`
    background-color: rgb(26, 26, 26);
    margin: auto;
    width: 10%;
    color: white;
    text-align: center;
    &:hover {
        background-color: rgba(135, 135, 135, 0.29);
        cursor: pointer;
    }
`;

const ViewImagesButton = styled.div`
    width: 50%;
    float: right;
    text-align: center;
    background-color: rgb(26, 26, 26);
    border-left: 1px solid white;
    border-right: 1px solid white;
    margin-bottom: .5%;
    &:hover {
        background-color: rgba(135, 135, 135, 0.29);
        cursor: pointer;
    }
`;

const Expand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    background-color: rgb(35, 42, 84);
    margin-top: 2%;
    border-radius: 8px;
    &:hover {
        drop-shadow(5px 5px 5px);
        cursor: pointer;
    }
`;

const Return = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-bottom: .5%;
    background-color: rgb(26, 26, 26);
    border-left: 1px solid white;
    border-right: 1px solid white;
    &:hover {
        background-color: rgba(135, 135, 135, 0.29);
        cursor: pointer;
    }
`;

const ExpandButtonsRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    font-size: 20px;
`;

const Description = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const SlideshowHolder = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
`;

const ImageHolder = styled.img`
    width: 98%;
    height: 95%;
    border-radius: 8px;
`;

const VideoHolder = styled.video`
    width: 98%;
    height: 95%;
    border-radius: 8px;
`;

const ImgIndexHolder = styled.div`
    display: flex;
    flex-direction: row;
    width: 5%;
    align-items: center;
    justify-content: center;
`;

const ObjectDisplay = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    padding-left: 1%;
    padding-right: 1%;
    padding-bottom: 1%;
    width: 30%;
    border-left: 2px solid OrangeRed;
    border-right: 2px solid OrangeRed;
    border-radius: 8px;
    margin-left: 0.5%;
    margin-right: 0.5%;
    margin-top: .5%;
    background-color: rgb(26, 26, 26);
`;

const ObjectFullDisplay = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    color: white;
    padding-top: 1%;
    height: 100%;
    width: 90%;
    background-color: rgb(26, 26, 26);
    border-left: 2px solid OrangeRed;
    border-right: 2px solid OrangeRed;
    border-radius: 8px;
`;

const PortfolioHolder = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
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
export default PortfolioSchool;