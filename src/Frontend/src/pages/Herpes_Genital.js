import styled from "styled-components";
import React from "react";
import Header from "../Components/Header/Header";
import EstruturaArtigos from "../Components/EstruturaArtigos/Herpes_Genital/EstruturaArtigos";
import Footer from "../Components/Footer/Footer";

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

function Herpes(){
    return(
        <Bodycontainer>
            <Header/>
            <EstruturaArtigos></EstruturaArtigos>
            <Footer/>
        </Bodycontainer>
    )
}

export default Herpes;