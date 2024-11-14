import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f9f9f9;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
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

function MudarSenha() {
    const { token } = useParams(); 
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!token) {
            setError("Token inválido");
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("As senhas não são iguais");
            return;
        }

        try {
            const response = await fetch("http://localhost:3306/api/users/Mudar_Senha", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password, token }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setError("");
            } else {
                setError(data.error);
                setMessage("");
            }
        } catch (error) {
            setError("Um erro ocorreu. Por favor tente novamente");
            setMessage("");
        }
    };

    return (
        <div>
            <Header />
            <Container>
                <Form>
                    <h2>Nova Senha</h2>
                    <Input
                        type="password"
                        placeholder="Insira a sua nova senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Confirme a sua nova senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button onClick={handleSubmit}>Mudar a senha</Button>
                    {message && <div style={{ color: "green", marginTop: "10px" }}>{message}</div>}
                    {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
                </Form>
            </Container>
            <Footer />
        </div>
    );
}

export default MudarSenha;
