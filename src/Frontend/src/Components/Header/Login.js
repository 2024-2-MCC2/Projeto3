import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import User from "../../assets/user-default.png"

const LoginContainer = styled.div`
align-self: center;
margin-left: -180px;
`
const EntrarContainer = styled(Link)`

`

const IMGLogin = styled.img`
border-radius: 40px;
`

function Login(){
    return(
        <LoginContainer>
            <EntrarContainer to = "/Login"><IMGLogin src="https://placehold.co/50x50/333333/FFFFFF.png"></IMGLogin></EntrarContainer>
        </LoginContainer>
    )
}

export default Login;