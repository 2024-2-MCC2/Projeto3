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
            <TituloArtigo>HPV GENITAL
            </TituloArtigo>
            <div>
                <ImagensArtigo src="https://placehold.co/580x480/000000/FFFFFF.png"></ImagensArtigo>
            </div>
            <div>
                <TextoCorpo> O papilomavírus humano (HPV), é um vírus que infecta a pele e as mucosas e as lesões provocadas pela infecção também podem ser precursoras de câncer - entre eles, o câncer de colo de útero, garganta e ânus.
                </TextoCorpo>
                <TextoCorpo>
                <ParagrafoDinamico>
                <TextoDinamico style={{ gridArea: "TD" }}>
                <b>Sintomas:</b>
                O principal sintoma do HPV é o surgimento de verrugas ou lesões na pele, normalmente como uma pequena mancha branca ou acastanhada. Também pode surgir coceira e irritação no local. Nas mulheres a irritação aparecem na região genital, desenvolvendo-se na vulva, vagina e colo do útero. Nos homens a irritação pode se manifestar no pênis. Em todos os gêneros, o ânus, garganta, boca, pés e mãos são locais em que o vírus pode se manifestar.
                </TextoDinamico>
                <ImagensArtigo src="https://placehold.co/280x280/000000/FFFFFF.png" style={{ gridArea: "I" }}></ImagensArtigo>
                </ParagrafoDinamico>
                </TextoCorpo>
                <TextoCorpo>
                <b>Formas de Transmissão:</b>
                O HPV é um vírus contagioso e transmitido, na maioria das vezes, pelo contato direto entre a pele. Entre os meios de transmissão mais conhecidos, está o ato sexual. Porém, diferente de outras ISTs, não é preciso haver troca de fluídos para que a transmissão ocorra: só o contato entre os órgãos sexuais já ocasiona a transmissão do vírus, além do compartilhamento de roupas íntimas ou toalhas. 
                </TextoCorpo>
                <TextoCorpo>
                <b>Diagnóstico:</b>
                Normalmente, o diagnóstico do HPV acontece em exames de rotina como o: papanicolau, colposcopia, vulvoscopia, peniscopia ou anuscopia Quando a lesão é encontrada, é feita uma biópsia em que a parte afetada é retirada para análise do tecido e DNA do vírus causador da lesão.
                </TextoCorpo>
                <TextoCorpo><b>Tratamento: </b>
                Cerca de 90% dos pacientes com HPV conseguem a cura completa da lesão e apenas 10% das pessoas mantêm o vírus. Lesões pequenas, em menor quantidade ou externas, podem ser tratadas com cremes e ácidos. Um dos mais usados é o ácido tricloroacético, outras técnicas mais utilizadas é a cauterização a laser, em que o feixe de luz é direcionado na lesão, queimando-a.
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