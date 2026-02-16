import styled from "@emotion/styled";
import logo from '../../assets/imagens/logo-2.png';

const ContainerRodape = styled.footer`
    width: 100%;
    background-color: ${props => props.theme.cores.primaria.b};
    color: ${props => props.theme.cores.branco};
    padding: 2rem 2rem 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
    box-sizing: border-box;
    .rodape-contato {
        grid-column: 1/6;
        &__logo {
            width: 100px;
            height: auto;
            margin-bottom: 1.5rem;
            img {
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }
        &__bio {
            max-width: 350px;
            color: ${props => props.theme.cores.secundaria.a};
            margin-bottom: 1.5rem;
        }
        &__links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        &__link {
            color: ${props => props.theme.cores.secundaria.b};
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .rodape-links {
        grid-column: 6/9;
        &__titulo {
            font-size: .7rem;
            margin-bottom: 1rem;
            color: ${props => props.theme.cores.secundaria.b};
            text-transform: uppercase;
        }
        &__navegacao {
            &__item {
                padding: 0.5rem 0;
                color: ${props => props.theme.cores.secundaria.a};
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    .rodape-legal {
        grid-column: 9/13;
        &__titulo {
            font-size: .7rem;
            margin-bottom: 1rem;
            color: ${props => props.theme.cores.secundaria.b};
            text-transform: uppercase;
        }
        &__navegacao {
            &__item {
                padding: 0.5rem 0;
                color: ${props => props.theme.cores.secundaria.a};
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    .rodape-creditos {
        grid-column: 1/13;
        padding: 1rem;
        border-top: 1px solid ${props => props.theme.cores.secundaria.a};
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        color: ${props => props.theme.cores.secundaria.a};
        text-transform: uppercase;
        font-size: .7rem;
    }
`;

const Rodape = () => {
    return (
        <ContainerRodape>
            <div className="rodape-contato">
                <div className="rodape-contato__logo">
                    <img src={logo} alt="Logo Clue" />
                </div>
                <p className="rodape-contato__bio">Celebrando a vibrante cultura do café de São Paulo. Uma plataforma dedicada aos que apreciam a arte em cada xícara.</p>
                <ul className="rodape-contato__links">
                    <li>
                        <a className="rodape-contato__link" href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a className="rodape-contato__link" href="http://" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                    </li>
                </ul>
            </div>
            <div className="rodape-links">
                <h3 className="rodape-links__titulo">Plataforma</h3>
                <nav className="rodape-links__navegacao">
                    <ul>
                        <li className="rodape-links__navegacao__item">Sugerir cafeteria</li>
                        <li className="rodape-links__navegacao__item">Nossa história</li>
                        <li className="rodape-links__navegacao__item">Contato</li>
                    </ul>
                </nav>
            </div>
            <div className="rodape-legal">
                <h3 className="rodape-legal__titulo">Legal</h3>
                <nav className="rodape-legal__navegacao">
                    <ul>
                        <li className="rodape-legal__navegacao__item">Política de privacidade</li>
                        <li className="rodape-legal__navegacao__item">Termos de uso</li>
                    </ul>
                </nav>
            </div>
            <div className="rodape-creditos">
                <p>© 2024 Clue. Feito com café em São Paulo.</p>
                <p>Desenvolvido por Yuri Zicatti</p>
            </div>
        </ContainerRodape>
    );
};

export default Rodape;