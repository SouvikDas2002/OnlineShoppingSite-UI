import React, { useState } from 'react'
import styled from 'styled-components';
import ArrowLeft from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRight from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';

const Container=styled.div`
    width:100%;
    height:90vh;
    display:flex;
    position:relative;
    overflow:hidden;
`
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=>props.direction==='left' && "10px"};
    right:${props=>props.direction==='right' && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`
const Wrapper=styled.div`
    height:100%;
    display:flex;
    transform:translate(${props=>props.slider * -100}vw);
    transition:transform 1s ease;
`
const Slide=styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:80vh;
    background-color:${props=>props.bg}
`;
const ImgContainer=styled.div`
    flex:1;
    height:100%;
`;
const Image=styled.img`
    height:100%;

`
const InfoContainer=styled.div`
    flex:1;
    padding:50px;
`;
const Title=styled.h1`
    font-size70px
`
const Desc=styled.p`
    margin:50px 0;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button=styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    function handleClick(direction){
        if(direction==='left'){
            setSlideIndex(slideIndex>0?slideIndex-1:4)
        }else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft/>
        </Arrow>
        <Wrapper slider={slideIndex}>
            {sliderItems.map(item=>(

                <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
            <Image src={item.img}/> 
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>
                ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("left")}>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider