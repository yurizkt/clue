import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import type { Cafeteria } from "../../types/Cafeteria";
import { deleteFavoritos, getFavoritos } from "../../services/favoritos";
import Card from "../../components/Card/Card";

const TituloEstilizado = styled.h1`
    font-size: 5rem;
    color: ${props => props.theme.cores.primaria.b};
    margin: 0;
    padding: 0;
    line-height: 5rem;
`;

const ParagrafoEstilizado = styled.p`
    width: 380px;
    font-size: 1rem;
    color: ${props => props.theme.cores.secundaria.a};
    margin: 1rem 0;
    padding: 0;
`;

const SectionGaleria = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 24px;
`;

const Favoritos = () => {
    const [favoritos, setFavoritos] = useState<Cafeteria[]>([]);
    
    const fetchFavoritos = async () => {
        const response = await getFavoritos();
        setFavoritos(response);
    }

    const deletarFavorito = async (id: number) => {
        await deleteFavoritos(id);
        await fetchFavoritos();
    }

    useEffect(() => {
        fetchFavoritos();
    }, [])

    return (
        <>
            <section>
                <TituloEstilizado>Cafeterias salvas.</TituloEstilizado>
                <ParagrafoEstilizado>Sua coleção curada de cafés especiais em São Paulo.</ParagrafoEstilizado>
            </section>
            <SectionGaleria>
                {favoritos.map((cafeteria: Cafeteria, index) => (
                    <Card
                        key={index}
                        cafeteria={cafeteria}
                        onFavoritoClick={() => deletarFavorito(cafeteria.id)}
                        isFavorito={true}
                    />
                ))}
            </SectionGaleria>
        </>
    )
}

export default Favoritos;