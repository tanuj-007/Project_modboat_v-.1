import React, {useState} from 'react';
// import { Button } from 'react-scroll';
//import { Link } from 'react';
// import { useNavigate } from 'react-router-dom';
//import {Button} from '../ButtonElements';
import styles from './index.module.css';
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
  // const navigate = useNavigate();
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
          <HeroP >CLICK @ SGTU </HeroP>

          <HeroBtnWrapper>
            
            {/* <Button 
            > */}
            <div className= {styles.ghost} onMouseEnter={onHover}style={{color: 'blue'}}
          
            onMouseLeave={onHover} 
            primary='true'dark='true' >
            {/* // onClick> */}
              <a href="https://tanuj-007.github.io/Modboat/#about">
                Know more
                
            {hover ? <ArrowForward />: <ArrowRight />}
              </a>
            </div>

            {/* </Button> */}

          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;