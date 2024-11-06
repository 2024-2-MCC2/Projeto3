import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  grid-template-columns: 0.3fr 1fr 0.8fr 0.2fr;
  grid-template-rows: 0.1fr 1fr;
  grid-template-areas:
    "i n d d"
    "i c c b";
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
  overflow-wrap: break-word;
  overflow: hidden;
  max-height: 100px;
  text-overflow: ellipsis;
`;

const NomeUser = styled.h1`
  font-size: 16px;
  grid-area: n;
  max-width: 500px;
`;

const DataHoraComentario = styled.p`
  grid-area: d;
  color: grey;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const DeleteButton = styled.button`
  grid-area: b;
  background-color: red;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: darkred;
  }
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};

function Comentarios() {
  const { id } = useParams();
  const [indexAtual, setIndexAtual] = useState(300);
  const [feedback, setFeedback] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/comments/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to load comments: HTTP ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched comments:", data);
        setComentarios(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("Failed to load comments.");
      }
    };

    fetchComments();
  }, [id]);

  const handleFeedbackChange = (event) => {
    const value = event.target.value;

    if (value.length <= 300) {
      setFeedback(value);
      setIndexAtual(300 - value.length);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (feedback.trim() && user) {
      const newComment = {
        message: feedback,
        articleId: id,
        userId: user.IdUsuario,
        userName: user.NomeUsuario,
        userImage: user.ImagemUsuario ? user.ImagemUsuario.toString('base64') : null,
        date: new Date().toISOString(),
      };

      try {
        const response = await fetch("http://localhost:5000/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Successfully posted comment:", data);
       
        const postedComment = { ...newComment, commentId: data.commentId };

        setComentarios((prevComments) => {
          const updatedComments = [postedComment, ...prevComments];
          return updatedComments.sort((a, b) => new Date(b.date) - new Date(a.date));
        });

        setFeedback("");
        setIndexAtual(300);
      } catch (error) {
        console.error("Error posting comment:", error);
        setError(error.message || "Failed to post comment.");
      }
    }
  };

  const handleDelete = async (commentId) => {
    if (!user) {
      setError("You must be logged in to delete comments.");
      return;
    }

    try {
      console.log("Attempting to delete comment with ID:", commentId);

      if (commentId === undefined || commentId === null) {
        setError("Invalid comment ID.");
        return;
      }

      const response = await fetch(`http://localhost:5000/api/comments/${commentId}/${user.IdUsuario}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      console.log("Successfully deleted comment with ID:", commentId);

      setComentarios(comentarios.filter(comment => comment.commentId !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
      setError(error.message || "Failed to delete comment.");
    }
  };

  return (
    <div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormContainer onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <Img src={user ? `data:image/jpeg;base64,${user.ImagemUsuario}` : "https://placehold.co/80x80/000000/FFFFFF.png"} />
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

      {comentarios.map((comentario, index) => {
        const imgSrc = comentario.userImage
          ? `data:image/jpeg;base64,${comentario.userImage}`
          : "https://placehold.co/80x80/000000/FFFFFF.png";

        return (
          <ComentarioContainer key={comentario.commentId}>
            <NomeUser>{comentario.userName} comentou:</NomeUser>
            <DataHoraComentario>Comentado às: {formatDate(comentario.date)}</DataHoraComentario>
            <Img style={{ gridArea: "i" }} src={imgSrc} alt="User Avatar" />
            <ConteudoComentario>{comentario.message}</ConteudoComentario>

            {comentario.userId === user?.IdUsuario && (
              <DeleteButton onClick={() => handleDelete(comentario.commentId)}>
                Deletar
              </DeleteButton>
            )}
          </ComentarioContainer>
        );
      })}
    </div>
  );
}

export default Comentarios;
