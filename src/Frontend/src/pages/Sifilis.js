import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import EstruturaArtigos from "../Components/EstruturaArtigos/Sifilis/EstruturaArtigos";

const Bodycontainer = styled.div`
display: grid;
height: 100vh;
gap: 0.5em;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
grid-template-areas: 
                    "h h h h h h"
                    ". m m m m ."
                    "f f f f f f";
`

function Sifilis(){
    return(
        <Bodycontainer>
        <Header/>
        <EstruturaArtigos></EstruturaArtigos>
        <Footer/>
        </Bodycontainer>
    )
}

export default Sifilis;