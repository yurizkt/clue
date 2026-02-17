const { getCafeteriasFavoritas, favoritaCafeteria, deletaFavoritoPorId } = require("../services/favoritos");

getFavoritos = (req, res) => {
    try {   
        const cafeterias = getCafeteriasFavoritas();
        res.json(cafeterias);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor", erro })
    }
}

postFavorito = (req, res) => {
    try {
        const id = req.params.id;
        if(id && Number(id)){
            favoritaCafeteria(id);
            res.status(201).json({ message: "Cafeteria favoritada com sucesso!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor", error })
    }
}

deleteFavorito = (req, res) => {
    try {
        const id = req.params.id;
        if(id && Number(id)){
            deletaFavoritoPorId(id);
            res.status(200).json({ message: "Cafeteria desfavoritada com sucesso!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor", error });
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}