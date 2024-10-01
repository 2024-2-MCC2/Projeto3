import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import MainArtigo from "../Components/PaginaDosArtigos/mainArtigo";

const ArtigoContainer = styled.div`
display: grid;
height: 100vh;
gap: 0.3em;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
grid-template-areas: 
                    "h h h h h h"
                    ". m m m m ."
                    "f f f f f f";
`

function Artigos(){
    return(
        <ArtigoContainer>
            <Header/>
            <MainArtigo/>
            <Footer/>
        </ArtigoContainer>
    )
}

export default Artigos