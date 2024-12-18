import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import articles from '../Artigos.json';

const SearchBarInput = styled.input`
    height: 30px;
    border-radius: 5px;
    border-style: none;
    margin-right: 5px;
    padding-left: 10px;
    width: 200px;
`;

const SearchBarButton = styled.button`
    background-color: #4ec746;
    width: 65px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    transition: all 0.5s ease 0s;

    &:hover {
        background-color: #40a339;
    }
`;

const SearchBarDiv = styled.div`
    margin-right: 40px;
    position: relative;
`;

const ResultsContainer = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 10;
    max-height: 300px;
    overflow-y: auto;
`;

const ResultItem = styled.div`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f5f5f5;
    }
`;

const ResultContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const ResultTitle = styled.h4`
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;

const ResultSubtitle = styled.p`
    margin: 5px 0 0;
    font-size: 12px;
    color: #666;
`;

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const searchBarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredArticles([]);
            setIsDropdownOpen(false);
        } else {
            const lowerCaseQuery = query.toLowerCase();
            const filtered = articles.filter(article =>
                article.title.toLowerCase().includes(lowerCaseQuery) ||
                article.subtitle.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredArticles(filtered);
            setIsDropdownOpen(true);
        }
    };

    const handleArticleClick = () => {
        setSearchQuery('');
        setIsDropdownOpen(false);
    };

    return (
        <SearchBarDiv ref={searchBarRef}>
            <SearchBarInput
                type="text"
                placeholder="Digite a sua busca aqui"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <SearchBarButton>Buscar</SearchBarButton>

            {isDropdownOpen && filteredArticles.length > 0 && (
                <ResultsContainer>
                    {filteredArticles.map((article) => (
                        <Link
                            key={article.id}
                            to={`/Artigo/${article.id}`}
                            style={{ textDecoration: 'none' }}
                            onClick={handleArticleClick}
                        >
                            <ResultItem>
                                <ResultContent>
                                    <ResultTitle>{article.title}</ResultTitle>
                                    <ResultSubtitle>{article.subtitle}</ResultSubtitle>
                                </ResultContent>
                            </ResultItem>
                        </Link>
                    ))}
                </ResultsContainer>
            )}
        </SearchBarDiv>
    );
}

export default SearchBar;
