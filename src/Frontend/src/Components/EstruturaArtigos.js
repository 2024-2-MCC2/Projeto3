import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ArtigosRelacionados from "./EstruturaArtigos/ArtigosRelacionados";
import articlesData from './Artigos.json';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Comentarios from "./EstruturaArtigos/Comentarios";

const EstruturaContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
`;

const TituloArtigo = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 20px;
`;

const Subtitulo = styled.p`
    margin-top: -10px;
    padding-bottom: 30px;
    color: #757575;
    max-width: 580px;
`;

const ImagensArtigo = styled.img`
    border-radius: 5%;
    max-width: 580px;
`;

const TextoCorpo = styled.p`
    text-align: left;
    padding-left: 5px;
    padding-right: 5px;
    max-width: 580px;
    display: grid;
`;

const BackgroundArtigo = styled.div`
width: 650px;
margin-top: 20px;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
background-color: white;
border: 2px solid #ddd;
border-radius: 20px;
`

function EstruturaArtigos() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        console.log("ID Recebido:", id);
        const foundArticle = articlesData.find(article => article.id === id);
        console.log("Artigo encontrado:", foundArticle);
        setArticle(foundArticle);
    }, [id]);

    if (!article) {
        return <p>Artigo não encontrado</p>;
    }

    return (
        <div>
            <Header/>
        <EstruturaContainer>
            <BackgroundArtigo>
            <TituloArtigo>{article.title}</TituloArtigo>
            <Subtitulo>{article.subtitle}</Subtitulo>
            <ImagensArtigo src={require(`./HomeComponents/img/${article.image}.png`)} alt="Article Image" />
            {article.content.map((section, index) => (
                <div key={index}>
                    <TextoCorpo>
                        <b>{section.heading}</b>
                        {section.text}
                    </TextoCorpo>
                </div>
            ))}
            </BackgroundArtigo>
            <h2>Artigos Relacionados</h2>
            <ArtigosRelacionados articles={article.relatedArticles} />
            <h2>Comentarios</h2>
            <Comentarios/>
        </EstruturaContainer>
        <Footer/>
        </div>
    );
}

export default EstruturaArtigos;
