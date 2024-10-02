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
            <TituloArtigo>GONORREIA</TituloArtigo>
            <Subtitulo>Infecção sexualmente transmissível causada pelo vírus herpes simplex e que provoca dor, coceira e feridas na área genital.</Subtitulo>
            <div>
                <ImagensArtigo src = "https://placehold.co/580x480/000000/FFFFFF.png"></ImagensArtigo>
                
            </div>
            <div>
                <TextoCorpo>A gonorreia é uma IST, causada pela bactéria Neisseria gonorrhoeae, que causa infecção nos órgãos genitais, reto e garganta. É muito comum, especialmente entre jovens de 15 a 24 anos.</TextoCorpo>
                <TextoCorpo>
                <ParagrafoDinamico>
                <TextoDinamico style={{ gridArea: "TD" }}>
                <b>Sintomas:</b>
                Os principais sintomas da Gonorreia são: dor ou ardor ao urinar, corrimento branco-amarelado semelhante ao pus, dor pélvica, sangramento fora do período menstrual,dor durante o contato íntimo, inchaço ou dor nos testículos, dor de garganta e comprometimento da voz, coceira ou secreção no ânus ou dor ao defecar, dor de garganta ínguas no pescoço ou úlceras ou feridas na época.
                </TextoDinamico>
                <ImagensArtigo src="https://placehold.co/280x280/000000/FFFFFF.png" style={{ gridArea: "I" }}></ImagensArtigo>
                </ParagrafoDinamico>
                </TextoCorpo>
                <TextoCorpo>
                <b>Formas de Transmissão:</b>
                A gonorreia é trasmitida de uma pessoa para outra por meio da relação sexual desprotegida, seja ela anal, oral ou vaginal. 
                <b>Gonorreia genital:</b> A gonorreia genital é transmitida pelo contato sexual desprotegido com uma pessoa infecctada.
                <b>Gonorreia orofaríngea:</b> Conhecida como gonorreia oral é trasmitida através do sexo oral desprotegido. 
                </TextoCorpo>
                <TextoCorpo>
                <b>Diagnóstico:</b>
                O diagnóstico da gonorreia é feito pelo ginecologista, urologista ou infectologista através da avaliação dos sintomas, histórico de relação sexual desprotegida e exame físico.</TextoCorpo>
                <TextoCorpo><b>Tratamento: </b>
                 O vírus herpes simplex tipo 2 não tem cura, porém a infecção pode ser controlada com terpia antiviral. Esse tratamento serve para acelerar a cura das lesões, aliviar os sintomas, impedir complicações e reduzir o risco de transmissão para outros.
                 Além dos medicamentos antivirais alguns tratamentos caseiros podem ser usados para aliviar a dor dos sintomas, como, o banho de assento com água fria, para as mulheres o banho de assento com água morna é uma boa opcção na hora de urinar, sabões e banho de espuma devem ser evitados, também, é importante manter a área genital seca e limpa, evita roupa interior apertada, cremes e pomadas não são recomendados, ao inves disso, opte por ingerir analgésicos e anti-inflamatórios.
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