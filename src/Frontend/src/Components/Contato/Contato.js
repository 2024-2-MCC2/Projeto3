import styled from "styled-components";
import React, { useState } from "react";

const ContatoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Titulo = styled.h1`
  text-align: center;
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Pesquisa = styled(Input)`
  text-align: center;
`

const FormContainer = styled.form`
  width: 35%;
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const Pesquisona = styled.textarea`
  display: block;
  width: 100%;
  height: 150px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`

const BotaoEnviar = styled.button`
  width: 50%; 
  height: 50px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: white; 
  border: none;
  border-radius: 4px; 
  cursor: pointer; 
  margin-top: 10px;

  &:hover {
    background-color: #0D2329;
  }
`

const TextoRestante = styled.p`
font-size: 15px;
margin-top: 0;
align-self: flex-end;
color: darkgrey;
`

function Contato() {
  const [indexAtual, setIndexAtual] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (event) => {
    const value = event.target.value;
    const previousLength = feedback.length;

    if(value.length <= 300){
      setFeedback(value);
      if (value.length > previousLength) {
        setIndexAtual((prev) => prev + 1); 
      } else if (value.length < previousLength) {
        setIndexAtual((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <ContatoContainer>
      <Titulo>Contato</Titulo>
      <p>Entre em contato conosco. O seu feedback nos ajuda a melhorar a experiência do nosso site.</p>
      <FormContainer>
        <Pesquisa type="text" placeholder="Insira o seu nome aqui" />
        <Pesquisa type="email" placeholder="Insira o seu email aqui" />
        <Pesquisa type="text" placeholder="Insira o assunto aqui" />
        <Pesquisona 
          placeholder="Insira o seu feedback aqui" 
          value={feedback} 
          onChange={handleFeedbackChange} 
        />
        <TextoRestante>Restante: {indexAtual}/500</TextoRestante>
        <BotaoEnviar>Enviar</BotaoEnviar>
      </FormContainer>
    </ContatoContainer>
  );
}

export default Contato;
