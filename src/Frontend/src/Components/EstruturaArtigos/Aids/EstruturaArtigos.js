import React from "react";
import styled from "styled-components";
import ArtigosRelacionados from "./ArtigosRelacionados";


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
            <TituloArtigo>AIDS / HIV</TituloArtigo>
            <Subtitulo>A aids é a doença causada pela infecção do Vírus da Imunodeficiência Humana (HIV é a sigla em inglês). </Subtitulo>
            <div>
                <ImagensArtigo src="https://placehold.co/580x480/000000/FFFFFF.png"></ImagensArtigo>
            </div>
            <div>
                <TextoCorpo> HIV é o vírus da imunodeficiência humana, que pode ser transmitido através do contato sexual desprotegido com uma pessoa contaminada com esse vírus, ou ainda pelo compartilhamento de agulhas ou passado da mãe para o bebê na gravidez ou amamentação.</TextoCorpo>
                <TextoCorpo>
                <ParagrafoDinamico>
                <TextoDinamico style={{ gridArea: "TD" }}>
                <b>Sintomas:</b>
                Os principais sintomas de uma infecção pelo HIV é possível AIDS são: Cansaço; Dor de cabeça ou dor de garganta, dor muscular ou nas articulações, suor noturno, diarreia, ínguas, rash cutâneo e febre baixa,  além de poder evoluir para a AIDS, chamada de síndrome da imunodeficiência adquirida, causada pela destruição do sistema imune pelo vírus HIV.
                </TextoDinamico>
                <ImagensArtigo src="https://placehold.co/280x280/000000/FFFFFF.png" style={{ gridArea: "I" }}></ImagensArtigo>
                </ParagrafoDinamico>
                </TextoCorpo>
                <TextoCorpo>
                <b>Formas de Transmissão:</b>
                O vírus HIV pode ser transmitido através do contato com sangue ou fluidos corporais, como leite materno, secreções vaginais e sêmen, de uma pessoa contaminada com o vírus, sendo assim, as principais formas de transmissão são: Relação sexual vaginal, oral e/ou anal sem uso de preservativo com uma pessoa infectada pelo HIV, compartilhamento de seringas contaminadas pelo HIV, durante e gravidez ou amamentação, contato direto com sangue ou fluidos corporais de uma pessoa infectada. 
                </TextoCorpo>
                <TextoCorpo>
                <b>Diagnóstico:</b>
                O diagnóstico da infecção pelo HIV é feito pelo infectologista ou clínico geral através da avaliação dos sintomas, assim como quando surgiram e histórico de comportamento de risco.
                Para que haja a confirmação do diagnóstico, o médico pode fazer um teste rápido de HIV e/ou solicitar exames de sangue ou saliva, para verificar a presença de anticorpos, antígenos ou RNA do vírus no organismo, assim como o tipo de vírus HIV.
                </TextoCorpo>
                <TextoCorpo><b>Tratamento: </b>
                O tratamento do HIV e AIDS deve ser feito com orientação do infectologista com o uso de um coquetel de medicamentos antirretrovirais, como dolutegravir, lamivudina e efavirenz, para reduzir a multiplicação de vírus e diminuir a carga viral.
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