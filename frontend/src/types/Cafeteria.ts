export interface Endereco {
    localizacao: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
}

export interface HorarioFuncionamento {
    sabado: string;
    domingo: string;
    semana: string;
}

export interface Experiencia {
    wifi: boolean;
    petFriendly: boolean;
    brunch: boolean;
    laptopFriendly: boolean;
    outdoorSeating: boolean;
    liveMusic: boolean;
    veganOptions: boolean;
    glutenFreeOptions: boolean;
}

export interface RedesSociais {
    instagram?: string | null;
    facebook?: string | null;
    twitter?: string | null;
}

export interface Contatos {
    telefone: string;
    email: string | null;
    site: string | null;
    redesSociais: RedesSociais;
}

export interface Cafeteria {
    id: number;
    nome: string;
    endereco: Endereco;
    horarioFuncionamento: HorarioFuncionamento;
    descricao: string;
    imagem: string;
    sobre: string;
    experiencia: Experiencia;
    galeria: string[];
    contatos: Contatos;
}