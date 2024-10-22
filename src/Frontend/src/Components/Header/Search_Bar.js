import React from "react";
import styled from "styled-components";

const SearchBarInput = styled.input`
height: 30px;
border-radius: 5px;
border-style: none;
margin-right: 5px;
padding-left: 10px;
`

const SearchBarButton = styled.button`
background-color: #4ec746;
width: 65px;
height: 30px;
text-align: center;
border-radius: 5px;
border-style: none;
cursor: pointer;
transition: all 0.5s ease 0s;
&:hover{
    background-color: #40a339;
}
`

const SearchBarDiv = styled.div`
margin-right: 40px;
`

function SearchBar() {
    return(
        <SearchBarDiv>
            <SearchBarInput type="text" placeholder="Digite a sua busca aqui">
            </SearchBarInput>
            <SearchBarButton>
                Buscar
            </SearchBarButton>
        </SearchBarDiv>
    )
}

export default SearchBar;