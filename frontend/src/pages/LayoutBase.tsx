import type React from "react";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Rodape from "../components/Rodape/Rodape";


const ContainerPrincipal = styled.main`
    padding: 3rem 2rem;
    box-sizing: border-box;
    min-height: calc(100vh - 80px 60px);
`;

const LayoutBase = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            <Cabecalho />
            <ContainerPrincipal>
                <Outlet />
                {children}
            </ContainerPrincipal>
            <Rodape />
        </>
    )
}

export default LayoutBase;