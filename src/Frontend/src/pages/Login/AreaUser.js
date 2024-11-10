import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const UserInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const UserDetail = styled.p`
  margin: 5px 0;
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c9302c;
  }
`;

function UserProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/Login'); 
  };

  return (
    <div>
      <Header />
      <ProfileContainer>
        {user ? (
          <>
            <ProfileImage 
              src={`http://localhost:3000${user.ImagemUsuario}`} 
              alt="Profile" 
            />
            <UserInfo>
              <UserDetail>Nome: {user.NomeUsuario}</UserDetail>
              <UserDetail>Email: {user.EmailUsuario}</UserDetail>
              <UserDetail>Data de Nascimento: {new Date(user.DatadeNascimento).toLocaleDateString()}</UserDetail>
            </UserInfo>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <p>Usuário não está logado.</p>
        )}
      </ProfileContainer>
      <Footer />
    </div>
  );
}

export default UserProfile;
