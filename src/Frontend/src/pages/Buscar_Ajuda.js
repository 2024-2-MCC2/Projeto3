import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const BuscarAjudaEstrutura = styled.div`
display: flex;
text-align: center;
align-items: center;
width: 150;
`

const BuscarTitulo = styled.h1`
font-family: Arial, Helvetica, sans-serif;
text-align: center;
color: #000;
`

const BuscarSubTitulo = styled.p`
font-family: Arial, Helvatica, sans-serif;
text-align: center;
font-size: 12px;
color: #6B6C6C;
`

const BuscarAjudaTxt = styled.p`
font-family: Arial, Helvatica, sans-serif;
font-size: 16px;
color: #6B6C6C;
padding: 10px;
text-align: center;
align-items: center;
align-self: center;
max-width: 10px;
`

function Buscar_Ajuda(){
    return(
        <div>
            <Header/>
            <BuscarTitulo>Precisa de Ajuda?</BuscarTitulo>
            <BuscarSubTitulo>Venha ver o que você pode fazer caso queira fazer exames</BuscarSubTitulo>
            <BuscarAjudaTxt></BuscarAjudaTxt>
            <Footer/>
        </div>
    )
}

export default Buscar_Ajuda