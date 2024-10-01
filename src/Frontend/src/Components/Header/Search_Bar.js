import React from "react";
import styled from "styled-components";

const SearchBarInput = styled.input`
border-radius: 20px;
border-style: none;
    margin-right: 5px;
`

const SearchBarButton = styled.button`
border-radius: 10px;
border-style: none;
 
`



function SearchBar() {
    return(
        <div>
            <SearchBarInput type="text">
            </SearchBarInput>
            <SearchBarButton>
                Buscar
            </SearchBarButton>
        </div>
    )
}

export default SearchBar;