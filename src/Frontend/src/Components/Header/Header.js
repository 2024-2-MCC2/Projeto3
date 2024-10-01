import React from "react";
import styled from "styled-components";
import Nav from "./NavBar";
import SearchBar from "./Search_Bar";
import logo from "./Enrolados.png";
import { Link } from "react-router-dom";
import Login from "./Login";

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #0D2329;
padding: 10px 20px;
height: 6em;
grid-area: h;
`

const HeaderImage = styled.img`
max-width: 130px;
max-height: 70px;
`

const LinkHeader = styled(Link)`

`

function Header() {
    return (
        <HeaderContainer>
            <h1>
                <LinkHeader to = "/">
                    <HeaderImage src={logo} alt="Logo do site"/>
                </LinkHeader>
            </h1>
            <Nav />
            <SearchBar />
            {/* <Login></Login> */}
        </HeaderContainer>
    )
}

export default Header;
