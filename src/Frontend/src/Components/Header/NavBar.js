import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LiContainer = styled.li`
  display: inline-block;
  padding-left: 20px;
`;

const AContainer = styled(Link)`
  text-decoration: none;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: space between;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  transition: all 0.5s ease 0s;
  &:hover {
    color: #7f8387;
    text-decoration: underline;
  }
`;

const UlContainer = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const NavContainer = styled.nav`
padding-left: 1px;
margin-right: -40px;
`

function Nav() {
  const scrollToTop = () => window.scrollTo(0, 0)
  return (
    <NavContainer>
      <UlContainer>
        <LiContainer><AContainer onClick={scrollToTop} to="/Artigos">Artigos</AContainer></LiContainer>
        <LiContainer><AContainer onClick={scrollToTop} to="/Dados">Dados</AContainer></LiContainer>
        <LiContainer><AContainer onClick={scrollToTop} to="/Buscar_Ajuda">Buscar Ajuda</AContainer></LiContainer>
        <LiContainer><AContainer onClick={scrollToTop} to = "/Quem_Somos">Quem Somos</AContainer></LiContainer>
        <LiContainer><AContainer onClick={scrollToTop} to = "/ContatoPage">Contato</AContainer></LiContainer>
      </UlContainer>
    </NavContainer>
  );
}

export default Nav;
