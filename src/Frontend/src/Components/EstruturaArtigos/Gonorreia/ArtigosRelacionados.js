import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArtigosContainer = styled.div`
padding-top: 40px;
display: flex;
flex-direction: column;
`
const ArtigoIndvContainer = styled(Link)`
text-decoration: none;
color: black;
width: 500px;
transition: all 0.3s ease;
background-color: #f9f9f9; 
border: 1px solid #ddd; 
border-radius: 8px; 
display: flex;
flex-direction: row;
padding: 15px; 
margin-bottom: 12px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
  }
`

const ArtImg = styled.img`
/* width: 100%; */
/* height: auto; */
border-radius: 8px;
max-width: 180px;
max-height: 120px;
`

const AContainer = styled.a`
padding-left: 150px;
padding-top: 20px;
`

function ArtigosRelacionados(){
    return(
        <ArtigosContainer>
            <ArtigoIndvContainer to = "/Herpes_Genital">
                <ArtImg src="/static/media/image2.b6a1328a31205c9f776a.png"/>
                <AContainer>HERPES GENITAL</AContainer>
            </ArtigoIndvContainer>
            <ArtigoIndvContainer to = "/HIV">
                <ArtImg src="/static/media/image5.a51dc9d1baa2e570ecab.png"/>
                <AContainer>HIV</AContainer>
            </ArtigoIndvContainer>
            <ArtigoIndvContainer to = "/Sifilis">
                <ArtImg src="/static/media/image4.0764b7a563af3e8ebadb.png"/>
                <AContainer>SÍFLIS</AContainer>
            </ArtigoIndvContainer>
        </ArtigosContainer>
    )
}

export default ArtigosRelacionados;