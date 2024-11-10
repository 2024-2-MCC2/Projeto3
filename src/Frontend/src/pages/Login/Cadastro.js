import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import User from "../../assets/user-default.png";

const CadastroDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SuccessMessage = styled.div`
  margin-top: 10px;
  color: green;
  font-weight: bold;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
`;

const Tooltip = styled.div`
  margin-left: 10px; 
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  position: absolute;
  left: 110%; 
  top: 50%;
  transform: translateY(-50%);
`;

const ImgContainer = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    opacity: 1;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Cadastro() {
  const [image, setImage] = useState(User);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      setImageFile(file);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não correspondem!");
      return;
    }

    setErrorMessage("")

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("nome", name);
    formData.append("datadeNascimento", dob);
    formData.append("profileImage", imageFile);

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setSuccessMessage("Usuário cadastrado com sucesso");
    } catch (error) {
      console.error("Error registering user:", error);
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <Header />
      <CadastroDiv>
        <BodyDiv>
          <h1>Cadastro</h1>
          <ImgWrapper>
            <ImgContainer>
              <label htmlFor="file-upload">
                <Img src={image} alt="Profile" />
              </label>
              <Tooltip>Envie a sua foto</Tooltip>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </ImgContainer>
          </ImgWrapper>
          <Input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Data de nascimento"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <Button onClick={handleSubmit}>Cadastrar-se</Button>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </BodyDiv>
      </CadastroDiv>
      <Footer />
    </div>
  );
}

export default Cadastro;
