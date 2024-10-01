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

function Nav() {
  return (
    <nav>
      <UlContainer>
        <LiContainer><AContainer to="/Artigos">Artigos</AContainer></LiContainer>
        <LiContainer><AContainer to="/Dados">Dados</AContainer></LiContainer>
        <LiContainer><AContainer to="/Buscar_Ajuda">Buscar ajuda</AContainer></LiContainer>
        <LiContainer><AContainer to = "/Quem_Somos">Quem somos</AContainer></LiContainer>
        <LiContainer><AContainer to = "/Contato">Contato</AContainer></LiContainer>
      </UlContainer>
    </nav>
  );
}

export default Nav;
