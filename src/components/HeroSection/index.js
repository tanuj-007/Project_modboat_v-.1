import React, {useState} from 'react';
// import { Button } from 'react-scroll';
import {Button} from '../ButtonElements';
import video from '../videos/video.mp4';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  Overlay,
  HeroContent, 
  HeroH1, 
  HeroP,
  HeroBtnWrapper, 
  ArrowForward,
  ArrowRight
  } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover);

  };

  return (
    <HeroContainer>
        <HeroBg>
            <Overlay> </Overlay>
            <VideoBg autoPlay loop muted src={video} 
            type=' video/mp4'/>
      
        </HeroBg> 
        <HeroContent>
          <HeroH1>Fabrication of Modular Boat </HeroH1>
          <HeroP>"Analysing conditions of waterbodies located near SGTU" </HeroP>
          <HeroP>CLICK @ SGTU </HeroP>
          <HeroBtnWrapper>
            
            <Button to='signup' onMouseEnter={onHover} 
            onMouseLeave={onHover} 
            primary='true'
            dark='true'><a href= 'https://tanuj-007.github.io/Modboat/#about>'>Know more </a>
            {hover ? <ArrowForward />: <ArrowRight />}
            
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;