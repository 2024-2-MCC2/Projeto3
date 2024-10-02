import React from "react";
import styled from "styled-components";
import ArtigosRelacionados from "../ArtigosRelacionados";
import Herpes from "./image1.png";
import Sintomas from "./sintomas-do-herpes-genital.jpg";

const EstruturaContainer = styled.div`
  grid-area: m;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const TituloArtigo = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 20px;
`;

const Subtitulo = styled.p`
  margin-top: -10px;
  padding-bottom: 30px;
  color: #757575;
`;

const ImagensArtigo = styled.img`
max-width: 580px;
max-height: 480px;
  border-radius: 5%;
  grid-area: I;
  border: 1px solid #ddd; 
`;

const LegendaImagem = styled.p`
  margin-top: 0px;
  text-align: left;
  padding-bottom: 20px;
  color: #757575;
`;


const TextoCorpo = styled.p`
  text-align: left;
  max-width: 580px;
  margin: 10px 0;
`

const TextoDinamico = styled.div``;

const ParagrafoDinamico = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px; 
  grid-template-areas: "TD I";
  text-align: left;
  max-width: 580px;
`;

function EstruturaArtigos() {
  return (
    <EstruturaContainer>
      <TituloArtigo>HERPES GENITAL</TituloArtigo>
      <Subtitulo>
        Infecção sexualmente transmissível causada pelo vírus herpes simplex e que provoca dor, coceira e feridas na área genital.
      </Subtitulo>
      <div>
        <ImagensArtigo src={Herpes}></ImagensArtigo>
        <LegendaImagem>Visão microscópica do vírus da herpes.</LegendaImagem>
      </div>
      <div>
        <TextoCorpo>
          A Herpes Genital é uma infecção sexualmente transmissível, causada pelo vírus do Herpes simplex (HSV) que provoca lesões na pele e nas mucosas dos órgãos genitais masculinos e femininos. O vírus herpes simplex vírus 1 (VHS-1), causador do herpes labial, não é o mesmo do herpes simplex vírus 2 (VHS-2), causador do herpes genital.
        </TextoCorpo>
        <ParagrafoDinamico>
          <TextoDinamico style={{ gridArea: "TD" }}>
            <b>Sintomas:</b> Os sintomas da herpes genital tendem a se desenvolver dentro de três a sete dias após a relação sexual responsável pela infecção, mas em alguns casos pode demorar até duas semanas. O principal sinal do herpes genital são pequenas bolhas agrupadas nos órgãos genitais, as bolhas surgem, e logo em seguida, se rompem formando úlceras. Essas infecções são acompanhadas de outros sintomas como febre, mal-estar e dores no corpo. Se as úlceras estiverem próximas à saída uretra, pode haver intensa dor ao urinar. As lesões costumam demorar em média 20 dias para desaparecer e, logo depois, reaparecer constantemente, tendendo a ser menos dolorosas do que a primeira vez.
          </TextoDinamico>
          <ImagensArtigo src={Sintomas} style={{ gridArea: "I" }} />
        </ParagrafoDinamico>
        <TextoCorpo>
        <b>Formas de Transmissão:</b>
          O vírus herpes simplex tipo 2 é transmitido pela via sexual. Mesmo quando o paciente está assintomático, período em que o paciente não produz os sintomas da herpes, ele pode transmitir o vírus da herpes em seu parceiro (a). Pacientes HIV positivos que também tenham herpes genital são o grupo que mais apresentam transmissão durante a fase assintomática.
        </TextoCorpo>
        <TextoCorpo>
        <b>Diagnóstico:</b>
          As lesões são facilmente reconhecidas por médicos experientes no momento das crises. Quando essas lesões estão na forma assintomática, elas podem necessitar de exames para confirmar a existência do vírus, porém esses documentos não fornecem informação sobre quando o paciente foi infectado.
        </TextoCorpo>
        <TextoCorpo>
        <b>Tratamento:</b>
          O vírus herpes simplex tipo 2 não tem cura, porém a infecção pode ser controlada com terapia antiviral. Esse tratamento serve para acelerar a cura das lesões, aliviar os sintomas, impedir complicações e reduzir o risco de transmissão para outros. Além dos medicamentos antivirais, alguns tratamentos caseiros podem ser usados para aliviar a dor dos sintomas, como o banho de assento com água fria. Para as mulheres, o banho de assento com água morna é uma boa opção na hora de urinar; sabões e banho de espuma devem ser evitados. Também é importante manter a área genital seca e limpa, evitar roupa interior apertada; cremes e pomadas não são recomendados. Ao invés disso, opte por ingerir analgésicos e anti-inflamatórios.
        </TextoCorpo>
        {/* <ImagensArtigo src="https://placehold.co/580x480/000000/FFFFFF.png"></ImagensArtigo> */}
        {/* <LegendaImagem>Legenda da Imagem</LegendaImagem> */}
      </div>
      <h2>Artigos Relacionados</h2>
      <ArtigosRelacionados></ArtigosRelacionados>
    </EstruturaContainer>
  );
}

export default EstruturaArtigos;
