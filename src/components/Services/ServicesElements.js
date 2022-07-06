import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #dbd9aa;
  
  @media screen and (max-width: 768px) {
    height: 1100px;
  };

  @media screen and (max-width: 480px) {
    height: 1300px;
  };
   
`;

export const ServicesWrapper= styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16 px;
  padding: 5 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  };

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 5 20px;
  };
`;

export const ServicesCard = styled.div`
  background: #ad9e55 ;
  display: flex-start;
  flex-direction: columns;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340 px;
  padding: 40px;
  box-shadow: 10px 2px 10px #eae0a4;
  transition: all 0.2s ease-in-out;
  border: 10px;


  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
 };
`;


export const ServicesIcon = styled.img`
  height: 140px;
  width: 140px;
  margin-bottom: 10px;
`;


export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #Black;
  margin-bottom: 24px;
  margin-top: 34px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  };
`;


export const ServicesH2 = styled.h2`
  text-decoration: overline;
  -webkit-text-decoration-color: #6e5f2f; 
  text-decoration-color: #6e5f2f;  

  font-size: 1.5rem;
  margin-bottom: 30px;
`;


export const ServicesP = styled.p`
  font-size: 1.5rem;
  text-align: center;
  text-weight: bold;
`;