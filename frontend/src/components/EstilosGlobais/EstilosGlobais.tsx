import { Global } from '@emotion/react';

const estilos = ( tema: any ) => {
    return {
        html: {
            fontFamily: tema.fontFamily,
        },
        body: {
            margin: 0,
            padding: 0,
            backgroundColor: tema.cores.primaria.a,
        },
        h1: {
            fontFamily: tema.fontTitle,
            fontStyle: 'normal',
            fontWeight: 400,
            margin: 0,
            padding: 0,
        },
        h2: {
            fontFamily: tema.fontTitle,
            fontStyle: 'normal',
            fontWeight: 400,
            margin: 0,
            padding: 0,
        },
        h3: {
            fontFamily: tema.fontTitle,
            fontStyle: 'normal',
            fontWeight: 400,
            margin: 0,
            padding: 0,
        },
        h4: {
            fontFamily: tema.fontTitle,
            fontStyle: 'normal',
            fontWeight: 400,
            margin: 0,
            padding: 0,
        },
        ul: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
        }
    }
}

const EstilosGlobais = () => {
    return (
        <Global
            styles={ estilos }
        />
    )
}

export default EstilosGlobais;