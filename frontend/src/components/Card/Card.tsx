import styled from '@emotion/styled';
import type { Cafeteria } from "../../types/Cafeteria";

import { FaHeart, FaRegHeart } from 'react-icons/fa'

const ArticleEstilizado = styled.article`
    display: flex;
    flex-direction: column;
`;

const DivImagemEstilizada = styled.div`
    width: 100%;
    height: 450px;
    background-color: #ccc;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ButtonFavorito = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: ${ props => props.theme.cores.primaria.a};
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
`;

const TituloEstilizado = styled.h2`
    font-size: 1.5rem;
    color: ${ props => props.theme.cores.primaria.b};
    margin: 16px 0 8px 0;
`;

const SubtituloEstilizado = styled.h3`
    font-size: 1rem;
    color: ${ props => props.theme.cores.primaria.a};
    margin: 0 0 8px 0;
    text-transform: lowercase;
`;

const DescricaoEstilizada = styled.p`
    font-size: 0.875rem;
    color: ${ props => props.theme.cores.primaria.a};
    margin: 0;
    line-height: 1.5;
`;

const Card = ({cafeteria, onFavoritoClick, isFavorito = false}: { cafeteria: Cafeteria, onFavoritoClick: () => void, isFavorito?: boolean }) => {
    if(!cafeteria) return null;
    return (
        <ArticleEstilizado>
            <DivImagemEstilizada>
                <ButtonFavorito onClick={onFavoritoClick}>
                    { isFavorito ? <FaHeart /> : <FaRegHeart /> }
                </ButtonFavorito>
                <img src={cafeteria.imagem} alt={`Foto da cafeteria ${cafeteria.nome}`} />
            </DivImagemEstilizada>
            <div>
                <TituloEstilizado>{cafeteria.nome}</TituloEstilizado>
                <SubtituloEstilizado>{cafeteria.endereco.bairro}</SubtituloEstilizado>
                <DescricaoEstilizada>{cafeteria.descricao}</DescricaoEstilizada>
            </div>
        </ArticleEstilizado>
    )
}

export default Card;