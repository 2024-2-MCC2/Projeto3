import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IuryImage from "../../assets/DSC_2681 (2).jfif"
import LilianImage from "../../assets/DSC_2687.jfif"
import MarcusImage from "../../assets/DSC_2692.jfif"
import MuriloImage from "../../assets/DSC_2697.jfif"

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
  width: 300px;
  height: 350px;

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
align-items: center;
  border: 1px solid grey; 
  margin-top: 15px;
  align-self: center;
  width: 250px;
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

  &:
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
  height: 350px;
  width: 600px;
  text-align: center;
  position: relative;
  display: flex;

`

const PopUpText = styled.div`
padding-top: 75px;
padding-left: 35px;
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

function Desenvolvedores() {
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
        <CardContainer onClick={() => handleCardClick('Lilian', 'http://localhost:3000/static/media/DSC_2687.e63482c991fc9246f08b.jfif', 'Desenvolvedora', 'https://www.linkedin.com/in/lilian-mercedes-paye-conde-894051333/')}>
          <TituloCard>Lilian</TituloCard>
          <ImgCard src={LilianImage} />
          <ButtonCard>Conheça mais</ButtonCard>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick('Iury', 'http://localhost:3000/static/media/DSC_2681%20(2).d11d0ac02f5f32c9e1e1.jfif', 'Desenvolvedor', 'https://www.linkedin.com/in/iury-xavier-03699430a/')}>
          <TituloCard>Iury</TituloCard>
          <ImgCard src={IuryImage}/>
          <ButtonCard>Conheça mais</ButtonCard>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick('Marcus', 'http://localhost:3000/static/media/DSC_2692.8dd04e35b8d217d3671d.jfif', 'Desenvolverdor', 'https://www.linkedin.com/in/marcus-vin%C3%ADcius-miranda-duque-8987a5322/')}>
          <TituloCard>Marcus</TituloCard>
          <ImgCard src={MarcusImage} />
          <ButtonCard>Conheça mais</ButtonCard>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick('Murilo', 'http://localhost:3000/static/media/DSC_2697.a34504c9576e2f706c76.jfif', 'Desenvolvedor', 'https://www.linkedin.com/in/murilodesouzavieira/')}>
          <TituloCard>Murilo</TituloCard>
          <ImgCard src={MuriloImage} />
          <ButtonCard>Conheça mais</ButtonCard>
        </CardContainer>
      </MainCardContainer>

      {isPopupVisible && (
        <PopupBackground onClick={handleClosePopup}>
          <PopupCard onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClosePopup}>×</CloseButton>
            <ImgCard style={{maxHeight:"350px", maxWidth:"400px"}} src={popupContent.imgSrc} />
            <PopUpText>
            <h1>{popupContent.title}</h1>
            <p>{popupContent.text}</p>
            <ButtonCardPopup href={popupContent.externalLink} target="_blank" rel="noopener noreferrer">Conheça Mais</ButtonCardPopup>
            </PopUpText>
          </PopupCard>
        </PopupBackground>
      )}
    </>
  );
}

export default Desenvolvedores;
