import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-1.svg';

import {  
  ServicesP, 
  ServicesH2, 
  ServicesH1, 
  ServicesIcon, 
  ServicesCard, 
  ServicesWrapper,
  ServicesContainer
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id= "Services">
        <ServicesH1> Modules </ServicesH1>
        
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src= {Icon1}/>
                  <ServicesH2> Module 1  </ServicesH2>
                  <ServicesP> Depth measuring module</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src= {Icon2}/>
                  <ServicesH2> Module 2 </ServicesH2>
                  <ServicesP> Sensor module for Ph, O2, Turbidity calculation</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src= {Icon3}/>
                  <ServicesH2> Module 3 </ServicesH2>
                  <ServicesP> Modular boat assembly</ServicesP>
              
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src= {Icon3}/>
                  <ServicesH2> Module 4 </ServicesH2>
                  <ServicesP> Final Project submission</ServicesP>
            </ServicesCard>
            {/* <ServicesCard>
                <ServicesIcon src= {Icon3}/>
                  <ServicesH2> Module 3 </ServicesH2>
                  <ServicesP> Modular boat assembly</ServicesP>
            </ServicesCard> */}
            {/* <ServicesCard>
                <ServicesIcon src= {Icon3}/>
                  <ServicesH2> Module 3 </ServicesH2>
                  <ServicesP> Modular boat assembly</ServicesP>
            </ServicesCard>*/}
        </ServicesWrapper> 

    </ServicesContainer>
  );
};

export default Services;