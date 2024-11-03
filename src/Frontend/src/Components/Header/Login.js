import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import User from "../../assets/user-default.png";

const LoginContainer = styled.div`
  align-self: center;
  margin-left: -180px;
  cursor: pointer; 
`;

const IMGLogin = styled.img`
  border-radius: 40px;
  max-width: 50px;
  max-height: 50px;
  transition: all 0.5s ease 0s;
  &:hover {
    border-color: #0d2329;
  }
`;

function Login() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    console.log("Image clicked"); 
    if (user) {
      navigate("/Area_Do_Usuario");
    } else {
      navigate("/Login");
    }
  };

  const imgSrc = user && user.ImagemUsuario ? `data:image/jpeg;base64,${user.ImagemUsuario}` : User;

  return (
    <LoginContainer onClick={handleClick}>
      <IMGLogin src={imgSrc} alt="User Icon" />
    </LoginContainer>
  );
}

export default Login;
