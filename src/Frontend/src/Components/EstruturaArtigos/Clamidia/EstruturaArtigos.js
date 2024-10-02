import React from "react";
import styled from "styled-components";
import ArtigosRelacionados from "../ArtigosRelacionados";


const EstruturaContainer = styled.div`
grid-area: m;
display:flex;
flex-direction: column;
text-align: center;
align-items: center;
`

const TituloArtigo = styled.h1`
font-family: Arial, Helvetica, sans-serif;
padding-top: 20px;
`

const Subtitulo = styled.p`
margin-top: -10px;
padding-bottom: 30px;
color: #757575;
`

const ImagensArtigo = styled.img`
border-radius: 5%;
`
const LegendaImagem = styled.p`
margin-top: 0px;
text-align: left;
padding-bottom: 20px;
color: #757575;
`

const TextoDinamico = styled.div``;

const ParagrafoDinamico = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px; 
  grid-template-areas: "TD I";
  text-align: left;
  max-width: 580px;
`;


const TextoCorpo = styled.p`
text-align: left;
max-width: 580px;
display: grid;
`

function EstruturaArtigos(){
    return(
        <EstruturaContainer>
            <TituloArtigo>CLAMÍDIA
            </TituloArtigo>
            <div>
                <ImagensArtigo src="https://placehold.co/580x480/000000/FFFFFF.png"></ImagensArtigo>
            </div>
            <div>
                <TextoCorpo> Clamídia é uma infecção sexualmente transmissível (IST) causada pela bactéria Chlamydia trachomatis, podendo ser assintomática, ou resultar que exigem um tratamento médico para ser sanada
                </TextoCorpo>
                <TextoCorpo>
                <ParagrafoDinamico>
                <TextoDinamico style={{ gridArea: "TD" }}>
                <b>Sintomas:</b>
                Os sintomas de clamídia podem surgir de 1 a 3 semanas após a relação sexual desprotegida, no entanto mesmo que não existam sinais e sintomas aparentes, a pessoa pode transmitir a bactéria. Porém, os principais sintomas da clamídia são: Dor ou ardor ao urinar, Corrimento vaginal ou peniano, dor ou sangramento durante o contato íntimo, dor pélvica, dor e inchaço nos testículos (caso masculino), sangramento fora do período menstrual (caso feminino).
                </TextoDinamico>
                <ImagensArtigo src="https://placehold.co/280x280/000000/FFFFFF.png" style={{ gridArea: "I" }}></ImagensArtigo>
                </ParagrafoDinamico>
                </TextoCorpo>
                <TextoCorpo>
                <b>Formas de Transmissão:</b>
                A clamídia é uma doença infecciosa causada pela bactéria Chlamydia trachomatis, que pode ser transmitida através da relação sexual sem que haja proteção, seja ela oral, vaginal ou retal.
                Além disso, a clamídia também pode passar de mãe para filho durante o parto, quando a grávida tem a infecção e não tem o tratamento adequado. 
                </TextoCorpo>
                <TextoCorpo>
                <b>Diagnóstico:</b>
                O diagnóstico da clamídia é feito pelo urologista ou ginecologista através da avaliação dos sintomas, histórico de saúde e sexual, e exame físico.
                Para confirmar o diagnóstico, o médico deve solicitar a análise da secreção vaginal ou peniana e o exame de urina, para identificar a presença da bactéria.
                </TextoCorpo>
                <TextoCorpo><b>Tratamento: </b>
                O tratamento para a clamídia deve ser feito com a orientação do ginecologista, urologista ou clínico geral e normalmente envolve o uso de antibióticos, como azitromicina ou doxiciclina.
                É recomendado manter o tratamento mesmo que não existam mais sintomas aparentes, pois assim é possível garantir que houve a eliminação da bactéria.
                </TextoCorpo>
                <ImagensArtigo src="https://placehold.co/580x480/000000/FFFFFF.png"></ImagensArtigo>
                <LegendaImagem>Legenda da Imagem</LegendaImagem>
            </div>
            <h2>Artigos Relacionados</h2>
            <ArtigosRelacionados></ArtigosRelacionados>
        </EstruturaContainer>
    )
}

export default EstruturaArtigos;