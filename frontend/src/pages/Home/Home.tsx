import styled from "@emotion/styled";


import type { Cafeteria } from "../../types/Cafeteria";
import Filtros from "../../components/Filtros/Filtros";
import { useCafeterias } from "../../contexts/useCafeteriasHook";
import { postFavoritos } from "../../services/favoritos";
import Card from "../../components/Card/Card";


const TituloEstilizado = styled.h1`
    font-size: 5rem;
    color: ${props => props.theme.cores.primaria.b};
    margin: 0;
    padding: 0;
    line-height: 5rem;
    span {
        display: block;
    }
    .italic {
        color: ${props => props.theme.cores.secundaria.a};
        font-style: italic;
    }
`;

const ParagrafoEstilizado = styled.p`
    width: 480px;
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

const MensagemVazia = styled.div`
    width: 100%;
    text-align: center;
    padding: 3rem 1rem;
    p {
        font-size: 1.25rem;
        color: ${props => props.theme.cores.secundaria.a};
        margin: 0;
    }
    .icone {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
`;


const Home = () => {
    const { cafeteriasFiltered, carregando } = useCafeterias();

    async function handleFavoritoClick(id: number) {
        await postFavoritos(id);
    }

    if (carregando) {
        return <div>Carregando cafeterias...</div>;
    }

    const exibirCafeterias = cafeteriasFiltered.length > 0
        ? cafeteriasFiltered.filter((_, index) => index < 6)
        : [];

    return (
        <>
            <TituloEstilizado>Encontre os <span>melhores grãos em</span> <span className="italic">São Paulo.</span></TituloEstilizado>
            <ParagrafoEstilizado>Um diretório curado de experiências excepcionais com café. De refúgios aconchegantes na Vila Madalena a lofts minimalistas em Pinheiros.</ParagrafoEstilizado>
            <Filtros />
            {exibirCafeterias.length > 0 ? (
                <SectionGaleria>
                    {exibirCafeterias.map((cafeteria: Cafeteria, index) => (
                        <Card
                            key={index}
                            cafeteria={cafeteria}
                            onFavoritoClick={() => handleFavoritoClick(cafeteria.id)}
                        />
                    ))}
                </SectionGaleria>
            ) : (
                <MensagemVazia>
                    <div className="icone">🔍</div>
                    <p>Não há resultados para sua pesquisa</p>
                </MensagemVazia>
            )}
        </>
    )
}

export default Home;