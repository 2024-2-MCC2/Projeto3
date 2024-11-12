import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import OngImage1 from "../../assets/Liberta_FullCollor_RGB_Prancheta-1-pu0yukvesk7sv176mc3sue9hcovb69ikjsf378ldcg.png"
import OngImage2 from "../../assets/Abia-LOGO-2.png"
import OngImage3 from "../../assets/Patrícia_Galvão_LOGO.jpg"

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

const ButtonCard = styled(Link)`
  border: 1px solid grey; 
  margin-top: 15px;
  align-self: center;
  align-content: center;
  text-decoration: none;
  width: 60%;
  height: 30px;
  background-color: #4ec746;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  color: black;
`

const ButtonCardPopup = styled.a`
display: flex;
align-items: center;
  border: 1px solid grey; 
  margin-top: 15px;
  align-self: center;
  width: 60%;
  height: 22px;
  background-color: #4ec746;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  color: black;
  text-decoration: none;
  display: inline-block;
  padding-top: 5px;
`;

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
padding-left: 5px;
padding-right: 0px;
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

  const handleCardClick = (title, imgSrc, text, externalLink) => {
    setPopupContent({ title, imgSrc, text, externalLink });
    setPopupVisible(true);
  }

  const handleClosePopup = () => {
    setPopupVisible(false);
  }

  return (
    <>
      <MainCardContainer>
        <CardContainer onClick={() => handleCardClick('Liberta', 'http://localhost:3000/static/media/Liberta_FullCollor_RGB_Prancheta-1-pu0yukvesk7sv176mc3sue9hcovb69ikjsf378ldcg.64770f2d92a4b72515ef.png', ' Uma organização social que trabalha pelo fim de todas as violências sexuais contra crianças e adolescentes por meio da comunicação e conscientização.', 'https://liberta.org.br/')}>
          <TituloCard>Instituto Liberta</TituloCard>
          <ImgCard src={OngImage1} />
          <ButtonCard>Saiba mais</ButtonCard>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick('ABIA', 'http://localhost:3000/static/media/Abia-LOGO-2.44dd3e54d922c0fb6538.png', 'Fundada em 1987, trabalha na promoção dos direitos de pessoas vivendo com HIV/AIDS e na conscientização sobre a epidemia de HIV. Essa promoção ocorre por meio de campanhas, pesquisas e atividades educativas.', 'https://abiaids.org.br/')}>
          <TituloCard>ABIA AIDS</TituloCard>
          <ImgCard src={OngImage2}/>
          <ButtonCard>Saiba mais</ButtonCard>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick('Patrícia Galvão', 'http://localhost:3000/static/media/Patr%C3%ADcia_Galv%C3%A3o_LOGO.833510d0416903dbb47e.jpg', 'Atua na promoção dos direitos das mulheres, incluindo temas como saúde sexual e reprodutiva. A organização também faz campanhas e pesquisas focadas em gênero, sexualidade, violência e abuso contra a mulher.', 'https://agenciapatriciagalvao.org.br/')}>
          <TituloCard>Agência Patrícia Galvão</TituloCard>
          <ImgCard src={OngImage3} />
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
            <ButtonCardPopup href={popupContent.externalLink} target="_blank" rel="noopener noreferrer">Saiba Mais</ButtonCardPopup>
            </PopUpText>
          </PopupCard>
        </PopupBackground>
      )}
    </>
  );
}

export default OngsCard;
