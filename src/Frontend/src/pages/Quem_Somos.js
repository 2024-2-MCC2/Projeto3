import styled from "styled-components";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Imagem1 from "../assets/DSC_2706.jpg"
import { Route } from "react-router-dom";
import Desenvolvedores from "../Components/QuemSomos/Desenvolvedores";

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
width: 750px;
height: 475px;
`

const QuemSomosTxt = styled.p`
font-family: Arial, Helvetica, sans-serif;
padding-left: 20px;
width: 600px;
`

function Quem_Somos() {
    return(
        <body>
            <Header/>
            <QuemSomosEstrutura>
            <QuemSomosImg src = {Imagem1}></QuemSomosImg>
            <div> 
            <SomosTitulo>Grupo Enrolados</SomosTitulo>
            <SomosSubTitulo>Projeto Interdisciplinar - Programação WEB</SomosSubTitulo>
            <QuemSomosTxt>Integrantes do grupo: Lilian Conde, Iury Xavier, Marcus Duque e Murilo Vieira</QuemSomosTxt>
            <QuemSomosTxt>O Projeto começou como uma forma de conscientizar as pessoas sobre a educação e saúde sexual. Usando como base a ODS 3 e também o tópico 3.7, criamos esse site para falar sobre a saúde sexual.</QuemSomosTxt>
            </div>
            </QuemSomosEstrutura>
            <Desenvolvedores></Desenvolvedores>
            <Footer/>
        </body>
    )
}

export default Quem_Somos