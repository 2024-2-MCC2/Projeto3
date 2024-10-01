import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainArtigoCont = styled.div`
grid-area: m;
display: flex;
flex-direction: column;
`

const H1Container = styled.h1`
margin-bottom: 0;
`

const Subtitulo = styled.p`
color: #757575;
`

const Artigocont = styled.div`
display: grid;
grid-template-columns: 0.5fr 1fr;
grid-template-rows: 0.5fr 1fr 0.5fr;
padding-top: 15px;
grid-template-areas: 
                    "i h"
                    "i p"
                    "i b";
background-color: #f9f9f9; 
border: 1px solid #ddd; 
border-radius: 8px; 
padding: 15px;
margin-bottom: 10px;
`

const Botao = styled(Link)`
padding: 10px;
text-align: center;
border-radius: 5px;
border-color: gray;
border-radius: 20px;
border-style: solid;
max-height: 50px;
max-width: 150px;
text-decoration: none;
color: black;
transition: all 0.3s ease;
&:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`

const H2Cont = styled.h2`
margin: 0;
padding: 0;
`

function MainArtigo() {
    return(
        <MainArtigoCont>
            <H1Container>Infecções Sexualmente Transmissíveis</H1Container>
            <Subtitulo>ISTs causadas principalmente por vírus, bactérias e outros organismos. </Subtitulo>
            <div>
                <Artigocont>
                    <img style={{ gridArea: "i"}} src="https://placehold.co/262x173/333333/FFFFFF.png"></img>
                    <H2Cont style={{ gridArea: "h" }}>HPV Genital</H2Cont>
                    <Subtitulo style={{ gridArea: "p" }}>Clamídia é transmitida por meio de contato sexual (anal, oral ou vaginal)ou pela forma congênita (infecção passada da mãe para o bebê durante a gestação) e não pode ser transmitida por meio de transfusão sanguínea.
                        </Subtitulo>
                    <Botao to="/HPV_Genital" style={{ gridArea: "b" }}>Mais informações</Botao>
                </Artigocont>
                <Artigocont>
                    <img style={{ gridArea: "i"}} src="https://placehold.co/262x173/333333/FFFFFF.png"></img>
                    <H2Cont style={{ gridArea: "h" }}>Síflis</H2Cont>
                    <Subtitulo style={{ gridArea: "p" }}>A Síflis é uma infecção curável e exclusiva do ser humano causada pela bactéria Treponema pallidum e pode apresentar várias manifestações clínicas e diferentes estágios.       
                        </Subtitulo>
                    <Botao style={{ gridArea: "b" }}>Mais informações</Botao>
                </Artigocont>
                <Artigocont>
                    <img style={{ gridArea: "i"}} src="https://placehold.co/262x173/333333/FFFFFF.png"></img>
                    <H2Cont style={{ gridArea: "h" }}>Aids/HIV</H2Cont>
                    <Subtitulo style={{ gridArea: "p" }}>Aids é a doença causada pela infecção do Vírus da Imunodeficiência Humana (HIV). Esse vírus ataca o sistema imunológico, que o responsável por defender o organismo de doenças.       
                        </Subtitulo>
                    <Botao style={{ gridArea: "b" }}>Mais informações</Botao>
                </Artigocont>
            </div>
        </MainArtigoCont>
    )
}

export default MainArtigo;