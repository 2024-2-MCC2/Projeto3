import styled from "styled-components";
import Enrolados from "../Header/Enrolados.png"

const BannerContainer = styled.div`
margin-top: -3px;
grid-area: b;
/* background: url(${Enrolados}); */
height: 300px;
background-size: cover;
background-color: #0D2329;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const BannerText = styled.p`
font-size: 48px;
font-weight: bold;
position: absolute;
color: white;
`

const BGImg = styled.img`
height: 300px;
`
const SubTexto = styled.p`
position: absolute;
color: white;
transform: translateY(50px);
`

function Banner(){
    return(
        <BannerContainer>
            <BGImg src={Enrolados}></BGImg>
            <BannerText>Enrolados</BannerText>
            <SubTexto>Venha se conscientizar</SubTexto>
        </BannerContainer>
    )

}

export default Banner;