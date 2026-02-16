import styled from "@emotion/styled";
import { useCafeterias } from "../../contexts/useCafeteriasHook";
import { useState } from "react";

const ContainerFiltros = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 2rem 1rem 0;
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid ${props => props.theme.cores.secundaria.b};
    margin-bottom: 2rem;
    justify-content: space-between;
    .container-botoes {
        display: flex;
        align-items: center;
    }
    .container-areas {
        display: flex;
        gap: 0.5rem;
        padding: 0 1rem 0 0;
        border-right: 1px solid ${props => props.theme.cores.secundaria.b};
    }
    .container-interesses {
        display: flex;
        gap: 0.5rem;
    }
    .container-pesquisa {
        display: flex;
        justify-content: flex-end;
    }
`;

interface BotaoFiltroPrimarioProps {
    isActive?: boolean;
}

const BotaoFiltroPrimario = styled.button<BotaoFiltroPrimarioProps>`
    background-color: ${props => props.theme.cores.primaria.a};
    color: ${props => props.theme.cores.primaria.b};
    border: 1px solid ${props => props.isActive ? props.theme.cores.primaria.b : props.theme.cores.secundaria.b};
    padding: 0.5rem 1.2rem;
    border-radius: 10rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        border-color: ${props => props.theme.cores.primaria.b};
    }
    &:focus {
        outline: none;
        border-color: ${props => props.theme.cores.primaria.b};
    }
`;

const BotaoFiltroSecundario = styled.button`
    background-color: transparent;
    color: ${props => props.theme.cores.secundaria.a};
    border: 1px solid ${props => props.theme.cores.secundaria.a};
    padding: 0.5rem 1.2rem;
    border-radius: 10rem;
    cursor: pointer;
    text-transform: uppercase;
    &:first-child {
        margin-left: 1rem;
    }
    &:active, &:focus {
        background-color: ${props => props.theme.cores.secundaria.a};
        color: #fff;
    }
`;

const InputPesquisa = styled.input`
    padding: 0.5rem 1rem;
    border: 1px solid ${props => props.theme.cores.secundaria.b};
    border-radius: 10rem;
    width: 200px;
`;

const Filtros = () => {
    const { setTermoPesquisa } = useCafeterias();
    const [areaSelecionada, setAreaSelecionada] = useState<string>('todas');

    const handleBlurPesquisa = (event: React.FocusEvent<HTMLInputElement>) => {
        setTermoPesquisa(event.target.value);
    };

    const handleAreaClick = (area: string, termo: string) => {
        setAreaSelecionada(area);
        setTermoPesquisa(termo);
    };

    return (
        <ContainerFiltros>
            <div className="container-botoes">
                <div className="container-areas">
                    <BotaoFiltroPrimario
                        isActive={areaSelecionada === 'todas'}
                        onClick={() => handleAreaClick('todas', '')}
                    >
                        Todas as áreas
                    </BotaoFiltroPrimario>
                    <BotaoFiltroPrimario
                        isActive={areaSelecionada === 'pinheiros'}
                        onClick={() => handleAreaClick('pinheiros', 'Pinheiros')}
                    >
                        Pinheiros
                    </BotaoFiltroPrimario>
                    <BotaoFiltroPrimario
                        isActive={areaSelecionada === 'jardins'}
                        onClick={() => handleAreaClick('jardins', 'Jardins')}
                    >
                        Jardins
                    </BotaoFiltroPrimario>
                    <BotaoFiltroPrimario
                        isActive={areaSelecionada === 'vilamadalena'}
                        onClick={() => handleAreaClick('vilamadalena', 'Vila Madalena')}
                    >
                        Vila Madalena
                    </BotaoFiltroPrimario>
                </div>
                <div className="container-interesses">
                    <BotaoFiltroSecundario onClick={() => { setTermoPesquisa('pet friendly'); handleAreaClick('todas', ''); }}>Pet friendly</BotaoFiltroSecundario>
                    <BotaoFiltroSecundario onClick={() => { setTermoPesquisa('wifi'); handleAreaClick('todas', ''); }}>Wi-fi</BotaoFiltroSecundario>
                    <BotaoFiltroSecundario onClick={() => { setTermoPesquisa('brunch'); handleAreaClick('todas', ''); }}>Brunch</BotaoFiltroSecundario>
                </div>
            </div>
            <div className="container-pesquisa">
                <InputPesquisa
                    type="text"
                    placeholder="Buscar cafeterias..."
                    onBlur={handleBlurPesquisa}
                />
            </div>
        </ContainerFiltros>
    );
};

export default Filtros;