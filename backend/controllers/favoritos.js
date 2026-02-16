const { getFavoritos, favoritaCafeteria } = require("../services/favoritos");

getAllFavoritos = (req, res) => {
    try {   
        const cafeterias = getFavoritos();
        res.status(200).send(cafeterias);
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor"})
    }
}

postFavoritos = (req, res) => {
    try {
        const id = req.params.id;
        if(id && Number(id)){
            favoritaCafeteria(id);
            res.status(201).json({ message: "Cafeteria favoritada com sucesso!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor"})
    }
}

deleteFavorito = (req, res) => {
    try {
        const id = req.params.id;
        if(id && Number(id)){
            deletaFavorito(id);
            res.status(200).json({ message: "Cafeteria desfavoritada com sucesso!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor"});
    }
}

module.exports = {
    getAllFavoritos, deleteFavorito, postFavoritos

}