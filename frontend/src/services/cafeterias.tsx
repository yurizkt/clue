import axios from "axios";

const cafeteriasAPI = axios.create({
    baseURL: "http://locahost:8000/cafeterias"
});

const getCafeterias = async () => {
    const res = await cafeteriasAPI.get("/");
    return res.data;
}

const postCafeterias = async (id: number) => {
    await cafeteriasAPI.post(`/${id}`);
}

const deleteCafeterias = async (id: number) => {
    await cafeteriasAPI.delete(`/${id}`);
}

export { 
    getCafeterias,
    postCafeterias,
    deleteCafeterias
}