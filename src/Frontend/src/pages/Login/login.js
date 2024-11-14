import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const LoginFormContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Linke = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await axios.post('http://localhost:3306/api/users/login', { email, password });
      const { user } = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/Area_Do_Usuario');
    } catch (error) {
      const errorResponse = error.response ? error.response.data.message : 'An unexpected error occurred';
      setErrorMessage(errorResponse);
      console.error('Login failed:', errorResponse);
    }
  };

  return (
    <div>
      <Header />
      <LoginPageContainer>
        <LoginFormContainer>
          <Title>Login</Title>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordWrapper>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleButton onClick={togglePasswordVisibility}>
              {showPassword ? 'Esconder' : 'Mostrar'}
            </ToggleButton>
          </PasswordWrapper>
          <Button type="submit" onClick={handleLoginClick}>Entrar</Button>
          <Linke to="/Esqueceu_Senha">Esqueceu a senha?</Linke>
          <Linke to="/Cadastro">Cadastrar-se</Linke>
        </LoginFormContainer>
      </LoginPageContainer>
      <Footer />
    </div>
  );
}

export default Login;
