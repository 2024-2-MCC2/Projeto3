import React from "react";
import styled from "styled-components";
import Logo from "../Header/Enrolados.png";

const FooterContainer = styled.footer`
  grid-area: f;
  background-color: #0D2329;
  padding: 40px;
  padding-left: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;
`

const Texto_Footer = styled.p`
  margin: 0;
`

const Logo_SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Credito = styled.a`
padding-top: 20px;
  text-decoration: none;
  color: white;
  margin: 0;
  &:hover {
    color: #7f8387;
  }
`

const InformacaoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 150px;
  align-items: center;
  text-align: center;
  margin: auto; 
`

const LogoFooter = styled.img`
  max-width: 130px;
  max-height: 70px;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  
  a {
    color: white;
    font-size: 24px; 
    text-decoration: none;
    
    &:hover {
      opacity: 0.8;
    }
  }
`

function Footer() {
  return (
    <FooterContainer>
      <Logo_SocialMedia>
        <LogoFooter src={Logo} alt="Logo" />
        <SocialLinks className="social-links">
          <a href="#"><i className="fab fa-facebook social-icon"></i></a>
          <a href="#"><i className="fab fa-behance social-icon"></i></a>
          <a href="#"><i className="fab fa-linkedin social-icon"></i></a>
          <a href="#"><i className="fab fa-instagram social-icon"></i></a>
          <a href="https://github.com/2024-2-MCC2/Projeto3"><i className="fab fa-github social-icon"></i></a>
        </SocialLinks>
      </Logo_SocialMedia>
      <InformacaoDiv>
        <Texto_Footer>2024 - Enrolados</Texto_Footer>
        <Credito href="https://www.freepik.com/free-vector/colorful-gradient-background-modern-design_143489742.htm">Background image by bunny on Freepik</Credito>
      </InformacaoDiv>
    </FooterContainer>
  );
}

export default Footer;
