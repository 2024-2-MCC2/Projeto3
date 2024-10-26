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
      ["https://datawrapper.dwcdn.net/tW0ft/1/","https://datawrapper.dwcdn.net/mCzsv/1/","https://datawrapper.dwcdn.net/cmb3D/1/"],//Dados de 1994-2023
      ["https://datawrapper.dwcdn.net/nKnUH/1/","https://datawrapper.dwcdn.net/2Feol/1/","https://datawrapper.dwcdn.net/xgruq/1/"],//Dados de 1994
      ["https://datawrapper.dwcdn.net/R4Sq6/1/","https://datawrapper.dwcdn.net/3O4Kl/1/","https://datawrapper.dwcdn.net/xuycp/2/"],//Dados de 1995
      ["https://datawrapper.dwcdn.net/5OGcz/1/","https://datawrapper.dwcdn.net/pnvOU/1/","https://datawrapper.dwcdn.net/Vd1Yy/1/"],//Dados de 1996
      ["https://datawrapper.dwcdn.net/Rj063/1/","https://datawrapper.dwcdn.net/KXdQX/1/","https://datawrapper.dwcdn.net/dLljQ/1/"],//Dados de 1997
      ["https://datawrapper.dwcdn.net/22jb0/1/","https://datawrapper.dwcdn.net/z2LUo/1/","https://datawrapper.dwcdn.net/8Sikd/2/"],//Dados de 1998
      ["https://datawrapper.dwcdn.net/eJRiX/1/","https://datawrapper.dwcdn.net/ltPFo/1/","https://datawrapper.dwcdn.net/bejgn/1/"],//Dados de 1999
      ["https://datawrapper.dwcdn.net/tw8Mu/1/","https://datawrapper.dwcdn.net/UTaR9/1/","https://datawrapper.dwcdn.net/t4i3y/1/"],//Dados de 2000
      ["https://datawrapper.dwcdn.net/HiPDI/1/","https://datawrapper.dwcdn.net/Vkq2W/1/","https://datawrapper.dwcdn.net/lxAfy/1/"],//Dados de 2001
      ["https://datawrapper.dwcdn.net/nnWsb/1/","https://datawrapper.dwcdn.net/Ikzw2/1/","https://datawrapper.dwcdn.net/CdCrg/1/"],//Dados de 2002
      ["https://datawrapper.dwcdn.net/okGB3/1/","https://datawrapper.dwcdn.net/ohw9u/1/","https://datawrapper.dwcdn.net/jXmpn/1/"],//Dados de 2003
      ["https://datawrapper.dwcdn.net/rYShS/1/","https://datawrapper.dwcdn.net/qX9bz/1/","https://datawrapper.dwcdn.net/4eeSZ/1/"],//Dados de 2004
      ["https://datawrapper.dwcdn.net/6hRlp/1/","https://datawrapper.dwcdn.net/qPpcn/1/","https://datawrapper.dwcdn.net/PBkTJ/1/"],//Dados de 2005
      ["https://datawrapper.dwcdn.net/1E631/1/","https://datawrapper.dwcdn.net/CqZM5/1/","https://datawrapper.dwcdn.net/q5UOl/1/"],//Dados de 2006
      ["https://datawrapper.dwcdn.net/0MFFc/1/","https://datawrapper.dwcdn.net/pNVHv/1/","https://datawrapper.dwcdn.net/mJ7C7/1/"],//Dados de 2007
      ["https://datawrapper.dwcdn.net/4ZauN/1/","https://datawrapper.dwcdn.net/8jfVm/1/","https://datawrapper.dwcdn.net/MXtIw/1/"],//Dados de 2008
      ["https://datawrapper.dwcdn.net/WoWsS/1/","https://datawrapper.dwcdn.net/IxVEu/1/","https://datawrapper.dwcdn.net/4WPSh/1/"],//Dados de 2009
      ["https://datawrapper.dwcdn.net/AGGW0/1/","https://datawrapper.dwcdn.net/Ji1hb/1/","https://datawrapper.dwcdn.net/YGiKy/1/"],//Dados de 2010
      ["https://datawrapper.dwcdn.net/ccB8P/1/","https://datawrapper.dwcdn.net/F0XqG/1/","https://datawrapper.dwcdn.net/uEQKX/1/"],//Dados de 2011
      ["https://datawrapper.dwcdn.net/pFWEZ/1/","https://datawrapper.dwcdn.net/yjWeq/1/","https://datawrapper.dwcdn.net/QZNst/1/"],//Dados de 2012
      ["https://datawrapper.dwcdn.net/lu5ja/1/","https://datawrapper.dwcdn.net/mbqrF/1/","https://datawrapper.dwcdn.net/OThjv/1/"],//Dados de 2013
      ["https://datawrapper.dwcdn.net/ON21Z/1/","https://datawrapper.dwcdn.net/JtoQa/1/","https://datawrapper.dwcdn.net/m4k9q/1/"],//Dados de 2014
      ["https://datawrapper.dwcdn.net/L8v5g/1/","https://datawrapper.dwcdn.net/fvUu9/1/","https://datawrapper.dwcdn.net/w1C9a/1/"],//Dados de 2015
      ["https://datawrapper.dwcdn.net/yewAY/1/","https://datawrapper.dwcdn.net/RAmtv/1/","https://datawrapper.dwcdn.net/K6h7q/1/"],//Dados de 2016
      ["https://datawrapper.dwcdn.net/Vg90F/1/","https://datawrapper.dwcdn.net/QTSNB/1/","https://datawrapper.dwcdn.net/oTbyc/1/"],//Dados de 2017
      ["https://datawrapper.dwcdn.net/HjElG/1/","https://datawrapper.dwcdn.net/CP3ov/1/","https://datawrapper.dwcdn.net/9ALzd/1/"],//Dados de 2018
      ["https://datawrapper.dwcdn.net/GwvIU/1/","https://datawrapper.dwcdn.net/k8HtX/1/","https://datawrapper.dwcdn.net/iRHoc/1/"],//Dados de 2019
      ["https://datawrapper.dwcdn.net/qYZ3F/1/","https://datawrapper.dwcdn.net/f6VAv/1/","https://datawrapper.dwcdn.net/mxaaH/1/"],//Dados de 2020
      ["https://datawrapper.dwcdn.net/xvpHr/1/","https://datawrapper.dwcdn.net/4L65X/1/","https://datawrapper.dwcdn.net/mI28J/1/"],//Dados de 2021
      ["https://datawrapper.dwcdn.net/y0zf4/1/","https://datawrapper.dwcdn.net/P1EW5/1/","https://datawrapper.dwcdn.net/fltsO/1/"],//Dados de 2022
      ["https://datawrapper.dwcdn.net/kN9Fk/2/","https://datawrapper.dwcdn.net/DovaR/1/","https://datawrapper.dwcdn.net/Bhb0D/1/"],//Dados de 2023
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
