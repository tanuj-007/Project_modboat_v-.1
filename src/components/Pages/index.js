import React, {useState} from 'react';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive} from '../InfoSection/Data';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Services from '../Services';
import Footer from '../Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }; ///set the state to go to false

  return (
    <>
      <Sidebar isOpen= {isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne} /> 
      <InfoSection {...homeObjTwo}/ >
      <InfoSection {...homeObjThree}/>
      <Services/>
      <InfoSection {...homeObjFour}/>
      <InfoSection {...homeObjFive}/>
      <Footer/>

    </>
  );
};

export default Home;