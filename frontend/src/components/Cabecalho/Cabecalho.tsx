import styled from '@emotion/styled';
import logo from '../../assets/imagens/logo-1.png';
import { Link, NavLink } from 'react-router-dom';

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${ props => props.theme.cores.primaria.a};
    box-sizing: border-box;
    border-bottom: 1px solid ${ props => props.theme.cores.primaria.b};
    .logo {
        width: 100px;
        height: auto;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .menu-navegacao a {
        font-size: .8rem;
        margin-left: 1rem;
        text-decoration: none;
        color: ${ props => props.theme.cores.primaria.a};
        text-transform: uppercase;
        &:hover {
            color: ${ props => props.theme.cores.primaria.b};
        }
        &.active, &:focus {
            color: ${ props => props.theme.cores.primaria.b};
            border-bottom: 1px solid ${ props => props.theme.cores.primaria.b};
            padding-bottom: .3rem;
        }
    }
`;

const Cabecalho = () => {
    return (
        <HeaderStyled>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo clue" />
                </Link>
            </div>
            <nav className="menu-navegacao">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}></NavLink>
            </nav>
        </HeaderStyled>
    )
}

export default Cabecalho;