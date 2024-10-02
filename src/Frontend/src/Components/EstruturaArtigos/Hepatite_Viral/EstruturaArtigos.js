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
            <TituloArtigo>HEPATITE VIRAL</TituloArtigo>
            <div>
                <ImagensArtigo src="https://placehold.co/580x480/000000/FFFFFF.png"></ImagensArtigo>
            </div>
            <div>
                <TextoCorpo> Inflamação do fígado que, na maioria dos casos, é causada por vírus, porém também pode acontecer como consequência do uso indiscriminado de medicamentos, do consumo excessivo de bebidas alcoólicas ou devido a uma alteração autoimune.
                Os tipos de hepatite mais frequentes são as causadas por vírus, principalmente as hepatites A, B e C, que podem provocar diversos sintomas.
                </TextoCorpo>
                <TextoCorpo>
                <ParagrafoDinamico>
                <TextoDinamico style={{ gridArea: "TD" }}>
                <b>Sintomas:</b>
                Dor de cabeça, mal-estar geral, dor e inchaço abdominal, pele e olhos amarelados, urina escura, fezes claras, náuseas e vômitos e perda de peso sem causa aparente.
                Os sintomas em questão podem variar de acordo com a causa dessa  condição, podendo haver mais ou menos sintomas de intensidades diferentes.

                </TextoDinamico>
                <ImagensArtigo src="https://placehold.co/280x280/000000/FFFFFF.png" style={{ gridArea: "I" }}></ImagensArtigo>
                </ParagrafoDinamico>
                </TextoCorpo>
                <TextoCorpo>
                <b>Formas de Transmissão:</b>
                As principais formas de transmissão de hepatite de causa infecciosa são: Contato com sangue contaminado, consumo de agua e alimentos contaminados pelo virus, compartilhamento de seringas e agulhas, relações sexuais sem uso de preservativo e uso de materiais nao esterilizados para fazer tatuagens, piercings ou para fazer a unha, por exemplo. 
                </TextoCorpo>
                <TextoCorpo>
                <b>Diagnóstico:</b>
                O diagnóstico de hepatite deve ser feito através do hepatologista, gastroenterologista ou clínico geral por meio da avaliação dos sinais, sintomas apresentados pela pessoa e o resultado de exames laboratoriais que avaliam o funcionamento do fígado, como TGO, TGP, bilirrubina e lactato desidrogenase.
                </TextoCorpo>
                <TextoCorpo><b>Tratamento: </b>
                Há diversas formas para que haja o devido tratamento da hepatite, entre elas, estão: Repouso e hidratação, dieta balanceada, abstinência de álcool, uso de medicamentos e, em alguns casos, o transplante de fígado.
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