import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Import das imagens
import Imagem1 from "../HomeComponents/img/image2.png"
import Imagem2 from "../../assets/53151296903_6e06488261_b.jpg"
import Imagem3 from "../HomeComponents/img/SifilisIMG.jfif"
import Imagem4 from "../../assets/OIP.jfif"
import Imagem5 from "../../assets/vacina-butantan.jpg"

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

const Subtitulo2 = styled.p`
align-self: flex-end;
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

const Artigocont2 = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 0.5fr 1fr 0.5fr;
padding-top: 15px;
grid-template-areas: 
                    "h2 i2"
                    "p2 i2"
                    "b2 i2";
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

const H3Cont = styled.h3`
align-self: flex-end;
font-size: 30px;
font-family: Arial, Helvetica, sans-serif;

`

const Imagems = styled.img`
border: 1px solid #ddd;
max-width: 262px;
height: 173px;
border-radius: 5%;
border-width: 2px;
border-color: grey;
`



function MainArtigo() {
    const scrollToTop = () => window.scrollTo(0, 0)
    return(
        <MainArtigoCont>
            <H1Container>Infecções Sexualmente Transmissíveis</H1Container>
            <Subtitulo>ISTs causadas principalmente por vírus, bactérias e outros organismos. </Subtitulo>
            <div>
                <Artigocont>
                    <Imagems style={{ gridArea: "i"}} src={Imagem1}></Imagems>
                    <H2Cont style={{ gridArea: "h" }}>HPV Genital</H2Cont>
                    <Subtitulo style={{ gridArea: "p" }}>Clamídia é transmitida por meio de contato sexual (anal, oral ou vaginal) ou pela forma congênita (infecção passada da mãe para o bebê durante a gestação) e não pode ser transmitida por meio de transfusão sanguínea.
                        </Subtitulo>
                    <Botao to="/Artigo/HPV_GENITAL" onClick={scrollToTop} style={{ gridArea: "b" }}>Mais informações</Botao>
                </Artigocont>
                <Artigocont>
                    <Imagems style={{ gridArea: "i", width:"262px"}} src={Imagem2}></Imagems>
                    <H2Cont style={{ gridArea: "h" }}>Síflis</H2Cont>
                    <Subtitulo style={{ gridArea: "p" }}>A Síflis é uma infecção curável e exclusiva do ser humano causada pela bactéria Treponema pallidum e pode apresentar várias manifestações clínicas e diferentes estágios.       
                        </Subtitulo>
                    <Botao to="/Artigo/Sifilis" onClick={scrollToTop} style={{ gridArea: "b" }}>Mais informações</Botao>
                </Artigocont>
                <Artigocont>
                    <Imagems style={{ gridArea: "i"}} src={Imagem3}></Imagems>
                    <H2Cont style={{ gridArea: "h"}}>Aids/HIV</H2Cont>
                    <Subtitulo style={{ gridArea: "p" }}>Aids é a doença causada pela infecção do Vírus da Imunodeficiência Humana (HIV). Esse vírus ataca o sistema imunológico, que o responsável por defender o organismo de doenças.       
                        </Subtitulo>
                    <Botao to="/Artigo/HIV" onClick={scrollToTop} style={{ gridArea: "b" }}>Mais informações</Botao>
                </Artigocont>
            </div>
            <H3Cont>Gravidez na adolescência</H3Cont>
            <Subtitulo2>1 em cada 5 recém-nascidos no brasil são filhos de uma mãe adolescente. Entenda mais sobre o assunto</Subtitulo2>
            <div>
            <Artigocont2>
                    <Imagems style={{ gridArea: "i2"}} src={Imagem4}></Imagems>
                    <H2Cont style={{ gridArea: "h2", textAlign:"right", paddingRight:"30px"}}>Entenda os impactos da gravidez na adolescência</H2Cont>
                    <Subtitulo style={{ gridArea: "p2" }}>Clamídia é transmitida por meio de contato sexual (anal, oral ou vaginal) ou pela forma congênita (infecção passada da mãe para o bebê durante a gestação) e não pode ser transmitida por meio de transfusão sanguínea.
                        </Subtitulo>
                    <Botao to="/HPV_Genital" onClick={scrollToTop} style={{ gridArea: "b2", marginLeft:"66%"}}>Mais informações</Botao>
                </Artigocont2>
                <Artigocont2>
                    <Imagems style={{ gridArea: "i2"}} src={Imagem5}></Imagems>
                    <H2Cont style={{ gridArea: "h2", textAlign:"right", paddingRight:"30px"}}>Vacinas e gravidez: uma combinação que garante saúde</H2Cont>
                    <Subtitulo style={{ gridArea: "p2" }}>Clamídia é transmitida por meio de contato sexual (anal, oral ou vaginal) ou pela forma congênita (infecção passada da mãe para o bebê durante a gestação) e não pode ser transmitida por meio de transfusão sanguínea.
                        </Subtitulo>
                    <Botao to="/HPV_Genital" onClick={scrollToTop} style={{ gridArea: "b2", marginLeft:"66%"}}>Mais informações</Botao>
                </Artigocont2>
                <Artigocont2>
                    <Imagems style={{ gridArea: "i2"}} src="https://placehold.co/262x173/333333/FFFFFF.png"></Imagems>
                    <H2Cont style={{ gridArea: "h2" , textAlign:"right", paddingRight:"30px"}}>HPV Genital</H2Cont>
                    <Subtitulo style={{ gridArea: "p2" }}>Clamídia é transmitida por meio de contato sexual (anal, oral ou vaginal) ou pela forma congênita (infecção passada da mãe para o bebê durante a gestação) e não pode ser transmitida por meio de transfusão sanguínea.
                        </Subtitulo>
                    <Botao to="/HPV_Genital" onClick={scrollToTop} style={{ gridArea: "b2", marginLeft:"66%"}}>Mais informações</Botao>
                </Artigocont2>
            </div>
        </MainArtigoCont>
    )
}

export default MainArtigo;