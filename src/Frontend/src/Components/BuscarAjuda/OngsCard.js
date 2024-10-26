import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 40px;
  margin-bottom: 40px;
`

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 0.3s;
  border-radius: 5px;
  border: 3px solid grey; 
  text-align: center;
  text-decoration: none;
  padding: 10px;
  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
  }
`

const TituloCard = styled.h1`
  color: black;
`

const ImgCard = styled.img`
  width: 100%;
`

const ButtonCard = styled.button`
  border: 1px solid grey; 
  margin-top: 15px;
  align-self: center;
  width: 60%;
  height: 30px;
  background-color: #4ec746;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  color: black;
`

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const PopupCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  height: 250px;
  width: 600px;
  text-align: center;
  position: relative;
  display: flex;

`

const PopUpText = styled.div`
padding-left: 80px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
`

function OngsCard() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: '', imgSrc: '', text: '' });

  const handleCardClick = (title, imgSrc, text) => {
    setPopupContent({ title, imgSrc, text });
    setPopupVisible(true);
  }

  const handleClosePopup = () => {
    setPopupVisible(false);
  }

  return (
    <>
      <MainCardContainer>
        <CardContainer onClick={() => handleCardClick('Ong 1', 'https://placehold.co/300x250/000000/FFFFFF.png', 'A ong x faz tal coisa y')}>
          <TituloCard>Ong 1</TituloCard>
          <ImgCard src="https://placehold.co/300x250/000000/FFFFFF.png" />
          <ButtonCard>Saiba mais</ButtonCard>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick('Ong 2', 'https://placehold.co/300x250/000000/FFFFFF.png', 'A ong x faz tal coisa y')}>
          <TituloCard>Ong 2</TituloCard>
          <ImgCard src="https://placehold.co/300x250/000000/FFFFFF.png" />
          <ButtonCard>Saiba mais</ButtonCard>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick('Ong 3', 'https://placehold.co/300x250/000000/FFFFFF.png', 'A ong x faz tal coisa y')}>
          <TituloCard>Ong 3</TituloCard>
          <ImgCard src="https://placehold.co/300x250/000000/FFFFFF.png" />
          <ButtonCard>Saiba mais</ButtonCard>
        </CardContainer>
      </MainCardContainer>

      {isPopupVisible && (
        <PopupBackground onClick={handleClosePopup}>
          <PopupCard onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClosePopup}>×</CloseButton>
            <ImgCard style={{maxHeight:"250px", maxWidth:"300px"}} src={popupContent.imgSrc} />
            <PopUpText>
            <h1>{popupContent.title}</h1>
            <p>{popupContent.text}</p>
            <ButtonCard>Saiba Mais</ButtonCard>
            </PopUpText>
          </PopupCard>
        </PopupBackground>
      )}
    </>
  );
}

export default OngsCard;
