import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BG from "../../assets/PhotoCard.jpg";

const Card = styled(Link)`
  padding-top: 15px;
  position: relative;
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
`;

const Imagem = styled.img`
  border-radius: 20px;
  width: 100%;
  height: auto; 
`;

const TituloCard = styled.h1`
  font-weight: bolder;
  font-size: 25px;
  padding: 15px;
  padding-top: 80px;
`;

const BackDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  position: absolute;
  top: 15px; 
  left: 0;
  right: 50%; 
  bottom: 0; 
  padding: 20px; 
  box-sizing: border-box;
  &:hover {
    text-decoration: underline;
  }
`;

const TextoCard = styled.p`
  padding: 15px;
  padding-top: 20px;
  font-weight: bold;
`;

function InformationCard() {
  return (
    <Card to = "/Dados">
      <Imagem src={BG} />
      <BackDiv>
        <TituloCard>
          "Quanto maior for a desigualdade social, mais presente estará a gravidez na adolescência."
        </TituloCard>
        <TextoCard>
          Clique aqui para poder entender como a desigualdade social está relacionada a gravidez na adolescência
        </TextoCard>
      </BackDiv>
    </Card>
  );
}

export default InformationCard;
