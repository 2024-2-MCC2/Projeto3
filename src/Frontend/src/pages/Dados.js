import React, { useState } from 'react';
import styled from "styled-components";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 20px 0;
`;

const StyledIframe = styled.iframe`
  width: 50%;
  border: none;
`;

const Button = styled.button`
  width: 9.8%;
  padding: 5px;
  background-color: darkgreen;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;
  &:hover {
    background-color: green;
  }
`;

const ButtonDados = styled.button`
  width: 20%;
  padding: 15px;
  background-color: darkgreen;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;
  &:hover {
    background-color: green;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const config = {
  initialSrcText: "https://datawrapper.dwcdn.net/tW0ft/1/",
  initialAltura: "800px",
  DadosTotal: [
    ["https://datawrapper.dwcdn.net/tW0ft/1/",
    "https://datawrapper.dwcdn.net/mCzsv/1/",
    "https://datawrapper.dwcdn.net/cmb3D/1/"],//Dados de 1994-2023
    ["https://datawrapper.dwcdn.net/nKnUH/1/",
    "https://datawrapper.dwcdn.net/2Feol/1/",
    "https://datawrapper.dwcdn.net/xgruq/1/"],//Dados de 1994
    ["https://datawrapper.dwcdn.net/R4Sq6/1/",
      "https://datawrapper.dwcdn.net/3O4Kl/1/",
      "https://datawrapper.dwcdn.net/xuycp/2/"],//Dados de 1995
      ["https://datawrapper.dwcdn.net/5OGcz/1/","https://datawrapper.dwcdn.net/pnvOU/1/","https://datawrapper.dwcdn.net/Vd1Yy/1/"],//Dados de 1996
      ["https://datawrapper.dwcdn.net/Rj063/1/","https://datawrapper.dwcdn.net/KXdQX/1/","https://datawrapper.dwcdn.net/dLljQ/1/"],//Dados de 1997
      ["https://datawrapper.dwcdn.net/22jb0/1/","https://datawrapper.dwcdn.net/z2LUo/1/","https://datawrapper.dwcdn.net/8Sikd/2/"],//Dados de 1998
      ["https://datawrapper.dwcdn.net/eJRiX/1/","https://datawrapper.dwcdn.net/ltPFo/1/","https://datawrapper.dwcdn.net/bejgn/1/"],//Dados de 1999
      ["https://datawrapper.dwcdn.net/tw8Mu/1/","https://datawrapper.dwcdn.net/UTaR9/1/","https://datawrapper.dwcdn.net/t4i3y/1/"],//Dados de 2000
      ["","",""],//Dados de 2001
      ["","",""],//Dados de 2002
      ["","",""],//Dados de 2003
      ["","",""],//Dados de 2004
      ["","",""],//Dados de 2005
      ["","",""],//Dados de 2006
      ["","",""],//Dados de 2007
      ["","",""],//Dados de 2008
      ["","",""],//Dados de 2009
      ["","",""],//Dados de 2010
      ["","",""],//Dados de 2011
      ["","",""],//Dados de 2012
      ["","",""],//Dados de 2013
      ["","",""],//Dados de 2014
      ["","",""],//Dados de 2015
      ["","",""],//Dados de 2016
      ["","",""],//Dados de 2017
      ["","",""],//Dados de 2018
      ["","",""],//Dados de 2019
      ["","",""],//Dados de 2020
      ["","",""],//Dados de 2021
      ["","",""],//Dados de 2022
      ["","",""],//Dados de 2023
  ],
  buttonLabels: {
    tipoDado: ["Mapa", "Grafico", "Tabela"],
    anos: [
      "Total", "1994","1995", "1996", "1997", "1998", "1999",
      "2000", "2001", "2002", "2003", "2004", "2005",
      "2006", "2007", "2008", "2009", "2010", "2011",
      "2012", "2013", "2014", "2015", "2016", "2017",
      "2018", "2019", "2020", "2021", "2022", "2023"
    ]
  }
};

function Dados() {
  const [srcText, setSrcText] = useState(config.initialSrcText);
  const [altura, setAltura] = useState(config.initialAltura);
  const [displayAtual, setDisplayAtual] = useState(0);
  const [anoAtual, setAno] = useState(0);

  function srcInterativo(ano, display) {
    setSrcText(config.DadosTotal[ano][display]);
  }

  function TipoDadoAtual(index) {
    const newDisplayAtual = index;
    setDisplayAtual(newDisplayAtual);
    setAltura(newDisplayAtual === 2 ? "900px" : "800px");
    srcInterativo(anoAtual, newDisplayAtual);
  }

  function handleAnoChange(index) {
    setAno(index);
    srcInterativo(index, displayAtual);
  }

  return (
    <div>
      <Header />
      <Container>
        <Title>Dados</Title>
        <ButtonDiv>
          {config.buttonLabels.tipoDado.map((label, index) => (
            <ButtonDados key={index} onClick={() => TipoDadoAtual(index)}>{label}</ButtonDados>
          ))}
        </ButtonDiv>
        <ButtonDiv>
          {config.buttonLabels.anos.map((label, index) => (
            <Button key={index} onClick={() => handleAnoChange(index)}>{label}</Button>
          ))}
        </ButtonDiv>
        <StyledIframe 
          height={altura}
          title="Mapa"
          src={srcText}
          scrolling="no"
          data-external="1"
        />
        <p> Fonte: MS/SVSA/CGIAE - Sistema de Informações sobre Nascidos Vivos - SINASC</p>
      </Container>
      <Footer />
    </div>
  );
}

export default Dados;
