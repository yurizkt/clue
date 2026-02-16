import { useEffect, useState, type ReactNode } from "react"
import type { Cafeteria } from "../types/Cafeteria"
import { CafeteriasContext, type CafeteriasContextType } from "./CafeteriasContextType"
import { getCafeterias } from "../services/cafeterias";


export const CafeteriasProvider = ({ children }:  { children: ReactNode }) => {
    const [cafeterias, setCafeterias] = useState<Cafeteria[]>([]);
    const [termoPesquisa, setTermoPesquisa] = useState<string>('');
    const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);

    // Busca as cafeterias uma única vez ao montar o componente
    useEffect(() => {
        const fetchCafeterias = async () => {
            try {
                setCarregando(true);
                const response = await getCafeterias();
                setCafeterias(response);
                setCarregando(false);
            } catch (error) {
                setErro('Erro ao buscar as cafeterias');
                setCarregando(false);
            } finally {
                setCarregando(false);
            }
        };

        fetchCafeterias()

    }, []);

    const cafeteriasFiltered = termoPesquisa.trim()
        ? cafeterias.filter( c => 
            c.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
            c.descricao.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
            c.endereco.bairro.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
            c.experiencia.brunch && 'brunch'.includes(termoPesquisa.toLowerCase()) ||
            c.experiencia.petFriendly && 'pet friendly'.includes(termoPesquisa.toLowerCase()) ||
            c.experiencia.wifi && 'wifi'.includes(termoPesquisa.toLowerCase())
        )
        : cafeterias;


    const value: CafeteriasContextType = {
        cafeterias,
        cafeteriasFiltered,
        termoPesquisa,
        setTermoPesquisa,
        carregando,
        erro,
    }

    return (
        <CafeteriasContext.Provider value={value}>
            {children}
        </CafeteriasContext.Provider>
    );

}