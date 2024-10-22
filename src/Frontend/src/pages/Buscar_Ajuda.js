// import React from "react";
// import styled from "styled-components";
// import Header from "../Components/Header/Header"
// import Footer from "../Components/Footer/Footer"

// const BuscarAjudaEstrutura = styled.div`
// text-align: center;
// align-items: center;
// `

// const BuscarTitulo = styled.h1`
// font-family: Arial, Helvetica, sans-serif;
// text-align: center;
// color: #000;
// `

// const BuscarSubTitulo = styled.p`
// font-family: Arial, Helvatica, sans-serif;
// text-align: center;
// font-size: 12px;
// color: #6B6C6C;
// `

// const BuscarAjudaTxt = styled.p`
// font-family: Arial, Helvatica, sans-serif;
// font-size: 16px;
// color: #090909;
// padding: 10px 420px;
// text-align: center;
// align-items: center;
// max-width: 580px;
// `

// function Buscar_Ajuda(){
//     return(
//         <div>
//             <Header/>
//             <BuscarTitulo>Precisa de Ajuda?</BuscarTitulo>
//             <BuscarSubTitulo>Venha ver o que você pode fazer caso queira fazer exames</BuscarSubTitulo>
//             <BuscarAjudaEstrutura>
//             <BuscarAjudaTxt>ISTs são infecções cujas quais deve-se sempre tomar os devidos cuidados e fazer exames recorrentes para saber o estado do corpo.</BuscarAjudaTxt>
//             <BuscarAjudaTxt>Os médicos especializados em Infecções Sexualmente Transmissíveis, geralmente são diagnosticadas por dermatologista ou urologista, no caso dos homens ou o ginecologista no caso das mulheres. </BuscarAjudaTxt>
//             <BuscarAjudaTxt></BuscarAjudaTxt>
//             </BuscarAjudaEstrutura>
//             <Footer/>
//         </div>
//     )
// }

// export default Buscar_Ajuda

import styled from "styled-components";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Route } from "react-router-dom";

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
            <QuemSomosImg src = "https://placehold.co/700x300/000000/FFFFFF.png"></QuemSomosImg>
            <div> 
            <SomosTitulo>Precisa de Ajuda?</SomosTitulo>
            <SomosSubTitulo>Venha ver o que você pode fazer caso queira fazer exames</SomosSubTitulo>
            <QuemSomosTxt>ISTs são infecções cujas quais deve-se sempre tomar os devidos cuidados e fazer exames recorrentes para saber o estado do corpo.</QuemSomosTxt>
            <QuemSomosTxt>Os médicos especializados em Infecções Sexualmente Transmissíveis, geralmente são diagnosticadas por dermatologista ou urologista, no caso dos homens ou o ginecologista no caso das mulheres.</QuemSomosTxt>
            </div>
            </QuemSomosEstrutura>  
            <Footer/>
        </body>
    )
}

export default Buscar_Ajuda