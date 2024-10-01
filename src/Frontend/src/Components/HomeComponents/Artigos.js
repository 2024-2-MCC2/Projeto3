import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import Imagem1 from "./img/image1.png";
import Imagem2 from "./img/image2.png";
import Imagem3 from "./img/image3.png";
import Imagem4 from "./img/image4.png";
import Imagem5 from "./img/image5.png";
import Imagem6 from "./img/image6.png";

// Estrutura dos Artigos
const ArtigosComtainer = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px; 
`

// Estilo do Titulo dos artigos
const TituloArtigos = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px; 
`

// Estilo da descrição dos artigos
const DescriArt = styled.p`
  padding: 5px 15px;
  text-decoration: none;
  color: #757575;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px; 
`

// Controla o tamanho da imagem
const ArtImg = styled.img`
  width: 100%; 
  height: auto; 
  border-radius: 8px; 
`

// Container de cada Artigo
const ArtiIndivContainer = styled(Link)`
  min-height: 400px;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: #f9f9f9; 
  border: 1px solid #ddd; 
  border-radius: 8px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
  }
`

// Estilo dos links de artigos
const AContainer = styled.p`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 0;
`

function Artigos() {
  return (
    <div>
      <TituloArtigos>Artigos</TituloArtigos>
      <ArtigosComtainer>
        <ArtiIndivContainer to = "/Herpes_Genital">
          <ArtImg src={Imagem1} alt="Artigo 1" />
          <AContainer>Herpes Genital: O que é, sintomas, tratamentos e causas.</AContainer>
          <DescriArt>Infecção sexualmente transmissível, causada pelo vírus do Herpes simples (HSV) que provoca lesões na pele e nas mucosas dos órgãos genitais masculinos e femininos.</DescriArt>
        </ArtiIndivContainer>
        <ArtiIndivContainer to = "/Gonorreia">
          <ArtImg src={Imagem2} alt="Artigo 2" />
          <AContainer>Gonorreia: sintomas, diagnóstico e tratamento</AContainer>
          <DescriArt>A gonorreia é uma IST, causada pela bactéria Neisseria gonorrhoeae, que causa infecção nos órgãos genitais, reto e garganta. É muito comum, especialmente entre jovens de 15 a 24 anos.</DescriArt>
        </ArtiIndivContainer>
        <ArtiIndivContainer to = "/Clamidia">
          <ArtImg src={Imagem3} alt="Artigo 3" />
          <AContainer>Clamidia</AContainer>
          <DescriArt>Clamídia é uma infecção sexualmente transmissível (IST) causada pela bactéria Chlamydia trachomatis, podendo ser assintomática, ou resultar que exigem um tratamento médico para ser sanada.</DescriArt>
        </ArtiIndivContainer>
        <ArtiIndivContainer to = "/Sifilis">
          <ArtImg src={Imagem4} alt="Artigo 4" />
          <AContainer>Afinal, o que transmite a sífilis? Beijo e sexo oral passam a bactéria?</AContainer>
          <DescriArt>A sífilis é uma infecção sexualmente transmissível causada pela bactéria Treponema pallidum capaz de causar de manifestar três estágios: Primária, secundária e terciária. 
          </DescriArt>
        </ArtiIndivContainer>
        <ArtiIndivContainer to ="/HIV">
          <ArtImg src={Imagem5} alt="Artigo 5" />
          <AContainer>AIDS/HIV</AContainer>
          <DescriArt>HIV é o vírus da imunodeficiência humana, que pode ser transmitido através do contato sexual desprotegido com uma pessoa contaminada com esse vírus, ou ainda pelo compartilhamento de agulhas ou passado da mãe para o bebê na gravidez ou amamentação.</DescriArt>
        </ArtiIndivContainer>
        <ArtiIndivContainer to = "/Hepatite_Viral">
          <ArtImg src={Imagem6} alt="Artigo 6" />
          <AContainer>HEPATITE VIRAL</AContainer>
          <DescriArt>Inflamação do fígado que, na maioria dos casos, é causada por vírus, porém também pode acontecer como consequência do uso indiscriminado de medicamentos, do consumo excessivo de bebidas alcoólicas ou devido a uma alteração autoimune.</DescriArt>
        </ArtiIndivContainer>
      </ArtigosComtainer>
    </div>
  )
}

export default Artigos;
