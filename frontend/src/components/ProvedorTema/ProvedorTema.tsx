import { ThemeProvider } from '@emotion/react';
import React from 'react';

declare module '@emotion/react' {
    export interface Theme {
        cores: {
            branco: string,
            preto: string,
            primaria: {
                a: string,
                b: string,
            },
            secundaria: {
                a: string,
                b: string,
            }
        },
        fontFamily: string,
        fontTitle: string,
    }
}

const tema = {
    cores: {
            branco: '#fff',
            preto: '#000',
            primaria: {
                a: '#f3f0e7',
                b: '#272626',
            },
            secundaria: {
                a: '#565449',
                b: '#d8cfbc',
            }
        },
        fontFamily: "'Monteserrat', sans-serif",
        fontTitle: "'Hanken Grotesk', sans-serif"
}

export const ProvedorTema = ({children}: { children: React.ReactNode }) => (
    <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
)