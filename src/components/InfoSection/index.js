import  React, {useState}  from 'react';
// import { Button } from '../ButtonElements';
import styles from './index.module.css';
import { 
InfoWrapper, 
InfoContainer, 
InfoRow, 
Column1, 
Column2, 
TextWrapper,   
Heading, 
Subtitle, 
TopLine,
BtnWrap,
ImgWrap,
Img
} from './InfoElements';


const InfoSection = (
  {lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    dark,
    dark2,
    primary}
  ) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover);
    };

  return (
    <>
     <InfoContainer lightBg ={ lightBg } id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine >{topLine}</TopLine>
                    <Heading lightText= {lightText }> {headline}</Heading>
                    <Subtitle darkText= {darkText}> <bold> {description}</bold></Subtitle>
                   
                    <BtnWrap> 
                      <div   className= {styles.ghost} onMouseEnter={onHover}style={{color: 'blue'}}
                      onMouseLeave={onHover} 
                      // primary='true'dark='true' 
                      to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact= "true"
                        offset={-80} 
                        primary={ primary? 1:0}
                        dark={dark ? 1:0}
                        dark2={dark2 ? 1:0}>
                          {buttonLabel}
                      </div>
                    </BtnWrap>

                </TextWrapper>
                </Column1>

                <Column2>

                  <ImgWrap>
                    <Img src= {img} alt={alt} />
                  </ImgWrap>
                
                </Column2>
            </InfoRow>
        </InfoWrapper>
     </InfoContainer>

    </>
  );
};

export default InfoSection;