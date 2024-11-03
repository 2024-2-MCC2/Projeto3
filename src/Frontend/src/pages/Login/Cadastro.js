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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />
      <CadastroDiv>
        <BodyDiv>
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
          <Input placeholder="Nome" />
          <Input type="date" placeholder="Data de nascimento" />
          <Input type="email" placeholder="E-Mail" />
          <Input type="password" placeholder="Senha" />
          <Button>Cadastrar-se</Button>
        </BodyDiv>
      </CadastroDiv>
      <Footer />
    </div>
  );
}

export default Cadastro;