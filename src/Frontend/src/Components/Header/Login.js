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
max-width: 50px;
max-height: 50px;
transition: all 0.5s ease 0s;
&:hover{
    border-color: #0D2329;
}
`

function Login(){
    return(
        <LoginContainer>
            <EntrarContainer to = "/Login"><IMGLogin src={User}></IMGLogin></EntrarContainer>
        </LoginContainer>
    )
}

export default Login;