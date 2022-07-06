import React from 'react';
// import { FaFacebook } from 'react-icons/fa';

import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia,
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    // SocialIcons, 
    // SocialconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        
                        <FooterLinkTitle> About Us:</FooterLinkTitle>

                            <FooterLink to='/signin'> How it works</FooterLink>
                            <FooterLink to='/signin'> Timeline</FooterLink>
                            <FooterLink to='/signin'> Funds</FooterLink>
                            <FooterLink to='/signin'> Terms of services</FooterLink>
                            <FooterLink to='/signin'> About CLICK</FooterLink>
                       
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        modboat-v.1
                    </SocialLogo>
                    <WebsiteRights>
                        modboat@ {new Date().getFullYear()}
                        All rights reserved.
                    </WebsiteRights>
                    
                    {/* <SocialIcons>
                        <SocialIconLink href="/" target= "blank"
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target= "blank"
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>                        
                        <SocialIconLink href="/" target= "blank"
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>                        
                        <SocialIconLink href="/" target= "blank"
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>                        
                        <SocialIconLink href="/" target= "blank"
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                    </SocialIcons> */}

                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    
    </FooterContainer>
  );
};

export default Footer;