import styled from "styled-components";
import { useState } from "react";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px;
  border: solid grey 2px;
  border-radius: 10px;
  padding: 10px;
  padding-top: 16px;
  padding-bottom: 0;
`;

const Img = styled.img`
  border-radius: 40px;
  max-width: 80px;
  max-height: 80px;
  transition: all 0.5s ease 0s;
  margin-right: 30px;
  align-self: center;
`;

const InputField = styled.textarea`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  height: 100px;
`;

const Button = styled.button`
  height: 40px;
  width: 80px;
  align-self: center;
  margin-left: 20px;
  background-color: green;
  text-align: center;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  &:hover {
    background-color: #40a339;
  }
`;

const TextoRestante = styled.p`
  font-size: 15px;
  margin-top: 0;
  margin-right: 15%;
  margin-bottom: 5px;
  align-self: flex-end;
  color: darkgrey;
`;

const ComentarioContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.5fr;
  grid-template-rows: 0.1fr 1fr;
  grid-template-areas:
    "i n d"
    "i c c";
  margin: 40px;
  border: solid grey 2px;
  border-radius: 10px;
  padding: 10px;
  padding-top: 16px;
  padding-bottom: 0;
`;

const ConteudoComentario = styled.p`
  grid-area: c;
  max-width: 500px;
`;

const NomeUser = styled.h1`
  font-size: 16px;
  grid-area: n;
  max-width: 500px;
`;

const DataHoraComentario = styled.p`
  grid-area: d;
`;

function Comentarios() {
  const [indexAtual, setIndexAtual] = useState(300);
  const [feedback, setFeedback] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const handleFeedbackChange = (event) => {
    const value = event.target.value;

    if (value.length <= 300) {
      setFeedback(value);
      setIndexAtual(300 - value.length);
    }
  };

  function Submit(event) {
    event.preventDefault();
    if (feedback.trim()) {
      const newComentario = {
        user: "O Usuário ...",
        content: feedback,
        date: new Date().toLocaleString(),
      };
      setComentarios([...comentarios, newComentario]);
      setFeedback("");
      setIndexAtual(300);
    }
  }

  return (
    <div>
      <FormContainer onSubmit={Submit}>
        <div style={{ display: "flex" }}>
          <Img src="https://placehold.co/80x80/000000/FFFFFF.png" />
          <InputField
            placeholder="Digite o seu comentário aqui"
            onChange={handleFeedbackChange}
            value={feedback}
            type="text"
          />
          <Button>Enviar</Button>
        </div>
        <TextoRestante>Restante: {indexAtual}/300</TextoRestante>
      </FormContainer>

      {comentarios.map((comentario, index) => (
        <ComentarioContainer key={index}>
          <NomeUser>{comentario.user} comentou:</NomeUser>
          <DataHoraComentario>{comentario.date}</DataHoraComentario>
          <Img style={{ gridArea: "i" }} src="https://placehold.co/80x80/000000/FFFFFF.png" />
          <ConteudoComentario>{comentario.content}</ConteudoComentario>
        </ComentarioContainer>
      ))}
    </div>
  );
}

export default Comentarios;
