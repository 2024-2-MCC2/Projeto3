import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Contato from "../Components/Contato/Contato";

function ContatoPage(){
    return(
        <div>
            <Header/>
            <Contato/>
            <Footer/>
        </div>
    )
}

export default ContatoPage