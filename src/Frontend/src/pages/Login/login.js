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
  padding: 20px;
`;

const LoginFormContainer = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

const Input = styled.input`
  display: block;
  width: 92%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #a29bfe;
    outline: none;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
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
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #a29bfe;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #6c5ce7;
    transform: scale(1.05);
  }
`;

const Linke = styled(Link)`
  display: block;
  margin-top: 15px;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 15px;
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
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
