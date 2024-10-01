import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArtigosContainer = styled.div`
padding-top: 40px;
display: flex;
flex-direction: column;
`
const ArtigoIndvContainer = styled.a`
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
`

const AContainer = styled.a`
padding-left: 150px;
padding-top: 20px;
`

function ArtigosRelacionados(){
    return(
        <ArtigosContainer>
            <ArtigoIndvContainer>
                <ArtImg src="https://placehold.co/180x120/000000/FFFFFF.png"/>
                <AContainer>HERPES GENITAL</AContainer>
            </ArtigoIndvContainer>
            <ArtigoIndvContainer>
                <ArtImg src="https://placehold.co/180x120/000000/FFFFFF.png"/>
                <AContainer>HIV</AContainer>
            </ArtigoIndvContainer>
            <ArtigoIndvContainer>
                <ArtImg src="https://placehold.co/180x120/000000/FFFFFF.png"/>
                <AContainer>SÍFLIS</AContainer>
            </ArtigoIndvContainer>
        </ArtigosContainer>
    )
}

export default ArtigosRelacionados;