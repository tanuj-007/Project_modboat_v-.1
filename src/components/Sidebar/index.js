import React from 'react';


import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute} from './SidebarElements';


const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
        <CloseIcon/>
        </Icon> 
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about' onclick={toggle} > About </SidebarLink>
            <SidebarLink to='problem' onclick={toggle} > Problem </SidebarLink>
            <SidebarLink to='solution' onclick={toggle} > Solution </SidebarLink>
            <SidebarLink to='modules' onclick={toggle} > Modules</SidebarLink>
            <SidebarLink to='usp' onclick={toggle} > USP</SidebarLink>
            <SidebarLink to='timeline' onclick={toggle} > Teamline</SidebarLink>
          </SidebarMenu>

          <SideBtnWrap>
            <SidebarRoute to="/signin"> Sign In </SidebarRoute> 
          </SideBtnWrap>

        </SidebarWrapper>  
    </SidebarContainer>
  );
};
 
export default Sidebar;