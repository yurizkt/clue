import { useContext } from "react";
import { CafeteriasContext } from './CafeteriasContextType';

export const useCafeterias = () => {
    const context = useContext(CafeteriasContext);
    if(!context) {
        throw new Error('useCafeterias deve ser usado dentro de CafeteriasProvider');
    }
    return context;
}