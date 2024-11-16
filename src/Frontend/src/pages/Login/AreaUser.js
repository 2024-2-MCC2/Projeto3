import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 4px solid #4caf50;
  margin-bottom: 20px;
  object-fit: cover;
`;

const UserInfo = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #333;
  font-family: 'Roboto', sans-serif;
`;

const UserDetail = styled.p`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;
  color: #555;
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #c9302c;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #4caf50;
  font-family: 'Roboto', sans-serif;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #777;
  margin-bottom: 30px;
`;

function UserProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/Login');
  };

  console.log(`http://localhost:3306${user.ImagemUsuario}`)

  return (
    <div>
      <Header />
      <ProfileContainer>
        {user ? (
          <>
            <PageTitle>Perfil de Usuário</PageTitle>
            <SubTitle>Bem-vindo(a), {user.NomeUsuario}</SubTitle>
            <ProfileImage
              src={`http://localhost:3306${user.ImagemUsuario}`}
              alt="Profile"
            />
            <UserInfo>
              <UserDetail><strong>Nome:</strong> {user.NomeUsuario}</UserDetail>
              <UserDetail><strong>Email:</strong> {user.EmailUsuario}</UserDetail>
              <UserDetail><strong>Data de Nascimento:</strong> {new Date(user.DatadeNascimento).toLocaleDateString()}</UserDetail>
            </UserInfo>
            <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
          </>
        ) : (
          <p style={{height:"100px", paddingTop:'10%'}}>Nenhum usuário logado.</p>
        )}
      </ProfileContainer>
      <Footer />
    </div>
  );
}

export default UserProfile;
