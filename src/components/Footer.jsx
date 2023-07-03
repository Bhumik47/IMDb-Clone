import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)`
  background-color: #121212;
  padding: 20px 0;
  color: #ffffff;
  margin-top:10rem;
`;

const FooterContent = styled(Grid)`
  max-width: 1200px;
  margin-left:9rem;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center; 
  padding: 20px; 
`;



const FooterLinkList = styled(Grid)`
  flex: 1;
  margin-right: 40px;
  flex-direction: column;
`;

const FooterLinkTitle = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const FooterLink = styled(Typography)`
  font-size: 16px;
  margin-bottom: 4px;
  cursor: pointer;
  color: #ffffff;
  transition: color 0.3s;

  &:hover {
    color: #f5c518;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent container>
        <FooterLinkList item container xs={12} sm={6} md={3}>
          <FooterLinkTitle variant="subtitle2">Get the IMDb App</FooterLinkTitle>
          <FooterLink>Android</FooterLink>
          <FooterLink>iOS</FooterLink>
        </FooterLinkList>
        <FooterLinkList item container xs={12} sm={6} md={3}>
          <FooterLinkTitle variant="subtitle2">Help</FooterLinkTitle>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterLinkList>
        <FooterLinkList item container xs={12} sm={6} md={3}>
          <FooterLinkTitle variant="subtitle2">Site Index</FooterLinkTitle>
          <FooterLink>IMDbPro</FooterLink>
          <FooterLink>Box Office Mojo</FooterLink>
          <FooterLink>IMDb Developer</FooterLink>
        </FooterLinkList>
        <FooterLinkList item container xs={12} sm={6} md={3}>
          <FooterLinkTitle variant="subtitle2">Legal</FooterLinkTitle>
          <FooterLink>Terms of Use</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
          <FooterLink>Cookie Policy</FooterLink>
        </FooterLinkList>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
