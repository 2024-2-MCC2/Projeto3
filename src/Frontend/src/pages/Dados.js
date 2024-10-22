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
    "https://datawrapper.dwcdn.net/tW0ft/1/",
    "https://datawrapper.dwcdn.net/mCzsv/1/",
    "https://datawrapper.dwcdn.net/cmb3D/1/"
  ],
  Dados94: [
    "https://datawrapper.dwcdn.net/nKnUH/1/",
    "https://datawrapper.dwcdn.net/2Feol/1/",
    "https://datawrapper.dwcdn.net/xgruq/1/"
  ],
  buttonLabels: {
    tipoDado: ["Mapa", "Grafico", "Tabela"],
    anos: [
      "Total", "1995", "1996", "1997", "1998", "1999",
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
  let displayAtual = 0;
  const [anoAtual, setAno] = useState(0);

  function srcInterativo(index) {
    if (index === 0) {
      setSrcText(config.DadosTotal[displayAtual]);
    } else {
      setSrcText(config.Dados94[displayAtual]);
    }
    setAno(index);
  }

  function TipoDadoAtual(index) {
    displayAtual = index;
    srcInterativo(anoAtual);
    setAltura(index === 2 ? "900px" : "800px");
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
            <Button key={index} onClick={() => srcInterativo(index)}>{label}</Button>
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
