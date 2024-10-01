import React from "react";
import styled from "styled-components";
import Carrossel from "./Carrossel";
import Artigos from "./Artigos";
import InformationCard from "./InformationCard1";
import InformationCard2 from "./InformationCard2";

const MainContainer = styled.main`
grid-area: m;
display: flex;
flex-direction: column;
align-items: center;
`

function Main(){
    return(
        <MainContainer>
            <Carrossel></Carrossel>
            <Artigos></Artigos>
            <InformationCard></InformationCard>
            <InformationCard2></InformationCard2>
        </MainContainer>
    )
}

export default Main;