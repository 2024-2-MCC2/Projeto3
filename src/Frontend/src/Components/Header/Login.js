import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import User from "../../assets/user-default.png";

const LoginContainer = styled.div`
  align-self: center;
  margin-left: -180px;
  cursor: pointer; 
  position: relative;
`;

const IMGLogin = styled.img`
  margin-right: 15px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  /* border: 4px solid #4caf50; */
  object-fit: cover;
  &:hover {
    border-color: darkgreen;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 55px;
  right: -5px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropdownDivider = styled.hr`
  margin: 0;
  border: 0;
  border-top: 1px solid #eaeaea;
`;

function Login() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));



  const imgSrc = user && user.ImagemUsuario
    ? `http://localhost:3000${user.ImagemUsuario}`
    : User; 

  const handleClick = () => {
    if (user) {
      navigate("/Area_Do_Usuario");
    } else {
      navigate("/Login");
    }
  };

  return (
    <LoginContainer 
      onClick={handleClick}
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <IMGLogin src={imgSrc} alt="User Icon" />
      <Dropdown isVisible={dropdownVisible}>
        <DropdownItem onClick={(e) => { e.stopPropagation(); navigate("/Login"); }}>Login</DropdownItem>
        <DropdownItem onClick={(e) => { e.stopPropagation(); navigate("/Cadastro"); }}>Cadastrar</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={(e) => { e.stopPropagation(); navigate("/Area_Do_Usuario"); }}>Área do usuário</DropdownItem>
      </Dropdown>
    </LoginContainer>
  );
}

export default Login;
