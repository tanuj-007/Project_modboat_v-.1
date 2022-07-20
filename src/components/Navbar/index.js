import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import{
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,   
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
   } from './NavbarElements';



const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav]= useState(false);

  const changeNav = ()=> {
    if(window.scrollY >= 580){
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);



  return (
    <>
      <Nav scrollNav= {scrollNav}>
        <NavbarContainer>

          <NavLogo to='/'> modboat.v1 </NavLogo>
          <MobileIcon onClick={toggle}> <FaBars/> </MobileIcon>
          
          <NavMenu>
            <NavItem> <NavLinks to='about'>About</NavLinks> </NavItem>
            <NavItem> <NavLinks to='problem'>Problem</NavLinks> </NavItem>
            <NavItem> <NavLinks to='solution'>Solution</NavLinks> </NavItem>
            <NavItem> <NavLinks to='Services'>Modules</NavLinks> </NavItem>
            <NavItem> <NavLinks to='usp'>USP</NavLinks> </NavItem>
            <NavItem> <NavLinks to= 'timeline' > Timeline</NavLinks></NavItem>
          </NavMenu>     

          <NavBtn> <NavBtnLink to='team;'>CLICK </NavBtnLink> </NavBtn>
          
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;