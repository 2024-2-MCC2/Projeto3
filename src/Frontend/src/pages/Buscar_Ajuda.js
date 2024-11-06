import styled from "styled-components";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import OngsCard from "../Components/BuscarAjuda/OngsCard";
import { Route } from "react-router-dom";
import Imagem from "../assets/que_son_las_ong.jpg"

const SomosTitulo = styled.h1`
font-family: Arial, Helvetica, sans-serif;
padding-right: 5px;
padding-left: 20px;
`

const SomosSubTitulo = styled.p`
padding-bottom: 1em;
color: #7B7B7B;
font-style: italic;
padding-left: 20px;
`

const QuemSomosEstrutura = styled.div`
display: flex;
flex-direction: row;
grid-template-columns: "h h";
` 

const QuemSomosImg = styled.img`
border-radius: 15px;
padding-left: 10px;
padding-top: 10px;
padding-bottom: 10px;
width: 700px;
height: 400px;
`

const QuemSomosTxt = styled.p`
font-family: Arial, Helvetica, sans-serif;
padding-left: 20px;
width: 600px;
`


function Buscar_Ajuda() {
    return(
        <body>
            <Header/>
            <QuemSomosEstrutura>
            <QuemSomosImg src = {Imagem}></QuemSomosImg>
            <div> 
            <SomosTitulo>Precisa de Ajuda?</SomosTitulo>
            <SomosSubTitulo>Venha ver o que você pode fazer para se ajudar ou ajudar alguém</SomosSubTitulo>
            <QuemSomosTxt>ISTs são infecções cujas quais deve-se sempre tomar os devidos cuidados e fazer exames recorrentes para saber o estado do corpo.</QuemSomosTxt>
            <QuemSomosTxt>Os médicos especializados em Infecções Sexualmente Transmissíveis, geralmente são diagnosticadas por dermatologista ou urologista, no caso dos homens ou o ginecologista no caso das mulheres.</QuemSomosTxt>
            <QuemSomosTxt>Reunimos algumas ongs que lutam por essa causa:</QuemSomosTxt>
            </div>
            </QuemSomosEstrutura>  
            <OngsCard/>
            <Footer/>
        </body>
    )
}

export default Buscar_Ajuda