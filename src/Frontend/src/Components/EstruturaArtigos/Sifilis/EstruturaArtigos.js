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
            <TituloArtigo>SÍFLIS</TituloArtigo>
            <Subtitulo> Infecção sexualmente transmissível causada pela bactéria Treponema pallidum capaz de causar de manifestar três estágios: primária, secundária e terciária.  </Subtitulo>
            <div>
                <ImagensArtigo src="https://placehold.co/580x480/000000/FFFFFF.png"></ImagensArtigo>
            </div>
            <div>
                <TextoCorpo> HIV é o vírus da imunodeficiência humana, que pode ser transmitido através do contato sexual desprotegido com uma pessoa contaminada com esse vírus, ou ainda pelo compartilhamento de agulhas ou passado da mãe para o bebê na gravidez ou amamentação.</TextoCorpo>
                <TextoCorpo>
                <ParagrafoDinamico>
                <TextoDinamico style={{ gridArea: "TD" }}>
                <b>Sintomas:</b>
                passam a ser notados a partir do 3° dia após o contágio, assim, ocorrendo o primeiro estágio, sendo capaz de ocorrer formação de feridas indolores no órgão genital. As feridas desaparecem em cerca de até 10 dias, mesmo sem tratamento.
                O segundo estágio acontece cerca de duas a oito semanas após as primeiras feridas se formaram, aproximadamente 33% daqueles que não trataram a sífilis primária desenvolvem o segundo estágio. Podendo apresentar vermelhidão pelo corpo, coceira, dores musculares, febre, dor de garganta, dificuldade para deglutir e aparecimento de língua (gânglios inchados) nas axilas e pescoço. Esses sintomas somem sem tratamento após duas semanas e, em seguida, a bactéria fica inativa no organismo.
                Sendo a mais difícil de ser detectada, por ter sintomas em grandes casos, como a aorta, cérebro, olhos, coração, juntas, sistema nervoso, dor de cabeça e epilepsia, há a ocorrência do terceiro estágio. Caso não haja o devido tratamento, ocorre sintomas de gravidades maiores, como meningite, AVC, princípios de demência, perda de coordenação, formigamento, cegueira ou problemas de visão e problemas cardiovasculares.</TextoDinamico>
                <ImagensArtigo src="https://placehold.co/280x280/000000/FFFFFF.png" style={{ gridArea: "I" }}></ImagensArtigo>
                </ParagrafoDinamico>
                </TextoCorpo>
                <TextoCorpo>
                <b>Formas de Transmissão:</b>
                A sífilis é transmitida por meio da relação sexual sem o uso da camisinha com uma pessoa na qual está infectada com a doença. Além disso, a doença apresenta chances de ser transmitida de maneira vertical para a criança, seja na gestação ou no parto. 
                </TextoCorpo>
                <TextoCorpo>
                <b>Diagnóstico:</b>
                Existem exames específicos para que haja a conquista concreta e efetiva do diagnóstico, entre eles, estão:
                Exame VDRL: Este exame pode identificar anticorpos no sangue que estão combatendo alguma infecção. Eles permanecem no sangue por anos, enquanto a bactéria estiver instalada no organismo, por isso o exame pode ser feito também para diagnosticar infecções antigas, cuja transmissão aconteceu há muito tempo. A vantagem do VDRL é que ele mostra a doença mesmo quando está ativa, por ser um teste quantitativo
                FTA-ABS: esse exame é considerado treponêmico, ou seja, ele é preparado com proteínas específicas para o Treponema pallidum. Ele é um teste qualitativo (resultado positivo ou negativo) e serve apenas para o diagnóstico e não para o acompanhamento da doença
                Teste rápido para sífilis: os testes rápidos são feitos em menos de 30 minutos e é similar a um teste de gravidez: aparecendo uma ou duas faixas pintadas. Eles podem ser feitos em centros públicos de referência em IST e AIDS
                Cultura de bactérias: o médico pode optar também por recolher amostras de uma secreção expelida por alguma ferida presente no corpo, que será analisada em microscópio. Este tipo de teste só pode ser realizado durante os dois primeiros estágios da sífilis, cujos sintomas envolvem o surgimento de feridas. A análise dessas substâncias pode indicar a presença da bactéria no organismo do paciente
                Punção lombar: se há suspeita de que o paciente está com complicações neurológicas causadas pela sífilis, o médico poderá coletar uma pequena amostra do líquido céfalo-raquidiano. As amostras são enviadas para laboratório e analisadas.

                </TextoCorpo>
                <TextoCorpo><b>Tratamento: </b>
                O tratamento para sífilis deve ser feito de acordo com a orientação do médico, sendo importante seguir as indicações mesmo que não existam mais sintomas visíveis para garantir a eliminação da bactéria. 
                Para isso, o médico normalmente indica injeções de penicilina-benzatina, também chamada de benzetacil, ou em alternativa outros antibióticos, como doxiciclina ou ceftriaxona.  

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