import styled from 'styled-components';

  
export const InfoContainer = styled.div`
  color: #fff;
   background: ${({lightBg}) => (lightBg ? '#8c855d': '#e7e0bb' )}; 

  @media screen and (max-width: 768px){
    padding: 50px 0;
  };
`;

  
// export const InfoContainer1 = styled.div`
//   color: #fff;
//   background: ${(lightBg)=> (lightBg? ' red' 
//   :
//   ' #010606')}
//   ; 

//   @media screen and (max-width: 768px){
//     padding: 100px 0;
//   };
// `;
  

export const InfoWrapper= styled.div`
  display: grid;
  z-index: 1;
  height: 580px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

`;

export const InfoRow= styled.div`
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) =>(imgStart ? 
    `'col2 col1'`: `'col1 col2'`)};

  @media screen and (max-width: 768px){
   grid-template-areas: ${({imgStart}) => (imgStart ? 
    `'col1' 'col2'`:`'col1 col1' 'col2 col2'`)}; 
  };
`;

export const Column1= styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-areas: col1;
`;

export const Column2= styled.div`
  margin-bottom: 14px;
  padding: 0 15px;
  grid-areas: col2;
`;

export const TextWrapper= styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  font-weight: bold;

`;

export const TopLine= styled.p`
  color: #00004d;
  margin-above:24px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700; 
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading= styled.h1`
  margin-above: 24px;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color:  ${({lightText}) => (lightText ? 
    '#ff884d ' : 'black')}; 


  @media screen and (max-width: 480px){
    font-size: 32px;
  };
`;

export const Subtitle= styled.p`
  max-width: 440px;
  text-align: justified;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#fff' : '#00001a')};
  // text-shadow: 0.1px .1px #fff;
  
`;

export const BtnWrap= styled.div`
  display: flex;
  justify-content: flex-start;

`;

export const ImgWrap= styled.div`
  max-width: 555px;
  // border-radius: 50%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px ;
  padding-right: 0;
  border-radius: 15%;
`;
 
