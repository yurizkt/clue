import { createContext } from "react";
import type { Cafeteria } from "../types/Cafeteria";

export interface CafeteriasContextType {
    cafeterias: Cafeteria[];
    cafeteriasFiltered: Cafeteria[];
    termoPesquisa: string;
    setTermoPesquisa: (termo: string) => void;
    carregando: boolean;
    erro: string | null;
}

export const CafeteriasContext = createContext<CafeteriasContextType | undefined>(undefined);
