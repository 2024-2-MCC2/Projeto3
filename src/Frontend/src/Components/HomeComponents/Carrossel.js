import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import SetaDireita from './SetaDireita.png';
import SetaEsquerda from './SetaEsquerda.png';
import PrimeiraImagem from './img/dsts(950x350).jpg';
import SegundaImagem from './img/Ensaio_Grávida.jpg';
import TerceiraImagem from './img/vaccine-1.jpg'
import { Link } from 'react-router-dom';

// CSS do Carrossel
const CarrosselContainer = styled.div`
  padding-top: 20px;
  position: relative;
  max-width: 950px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
`;

const CarrosselImagens = styled(Link)`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const ImagemCarrIndividual = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 20px;
`;

// CSS dos Botões
const BotaoProximo = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  right: 10px;
  background-color: white;
`;

const BotaoUltimo = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  left: 10px;
  background-color: white;
`;

const ImagemBotao = styled.img`
  max-width: 20px;
  max-height: 20px;
`;

// CSS do Texto
const HyperlinkTexto = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(0, 0, 0, .5);
  position: absolute;
  bottom: 0;
  left: 0;
  height: 33%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  padding: 5px;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const TextosDoCarrossel = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

// Código para o funcionamento do carrossel
function Carrossel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(TextoAtual(0));
  const [linkatual, setLinkatual] = useState(Linkeatual(0));

  function showImage(index) {
    if (carouselRef.current) {
      const offset = -index * 100;
      carouselRef.current.style.transform = `translateX(${offset}%)`;
    }
  }

  function TextoAtual(index) {
    switch (index) {
      case 0:
        return "DSTs/ISTs: conheça as 6 mais comuns e como se prevenir.";
      case 1:
        return "Entenda os impactos da gravidez na adolescência";
      case 2:
        return "Vacinas e gravidez: uma combinação que garante saúde";
    }
  }

  function Linkeatual(index){
    switch (index){
      case 0:
        return "/DSTs_ISTs"
        case 1:
          return "/Impactos_Gravidez_Adolescencia"
          case 2:
            return "Vacina_Gravidez"
    }
  }

  function Proximo() {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % 3;
      setCurrentText(TextoAtual(newIndex));
      setLinkatual(Linkeatual(newIndex));
      showImage(newIndex);
      return newIndex;
    });
  }

  function Ultimo() {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + 3) % 3;
      setCurrentText(TextoAtual(newIndex));
      setLinkatual(Linkeatual(newIndex));
      showImage(newIndex);
      return newIndex;
    });

  }

  return (
    <CarrosselContainer>
      <CarrosselImagens to={linkatual} ref={carouselRef}>
        <ImagemCarrIndividual src={PrimeiraImagem} alt="Imagem 1" />
        <ImagemCarrIndividual src={SegundaImagem} alt="Imagem 2" />
        <ImagemCarrIndividual src={TerceiraImagem} alt="Imagem 3" />
      </CarrosselImagens>
      <TextosDoCarrossel>
        <HyperlinkTexto to={linkatual} >{currentText}</HyperlinkTexto>
      </TextosDoCarrossel>
      <BotaoProximo onClick={Proximo}>
        <ImagemBotao src={SetaDireita} alt="Seta para a direita" />
      </BotaoProximo>
      <BotaoUltimo onClick={Ultimo}>
        <ImagemBotao src={SetaEsquerda} alt="Seta para a esquerda" />
      </BotaoUltimo>
    </CarrosselContainer>
  );
}

export default Carrossel;
