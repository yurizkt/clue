import axios from "axios";

const cafeteriasAPI = axios.create({
    baseURL: "http://locahost:8000/favoritos"
});

const getFavoritos = async () => {
    const res = await cafeteriasAPI.get("/");
    return res.data;
}

const postFavoritos = async (id: number) => {
    await cafeteriasAPI.post(`/${id}`);
}

const deleteFavoritos = async (id: number) => {
    await cafeteriasAPI.delete(`/${id}`);
}

export { 
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}