const { getCafeterias, postCafeteria } = require("../services/cafeterias");

getAllCafeterias = (req, res) => {
    try {   
        const cafeterias = getCafeterias();
        res.status(200).send(cafeterias);
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor"})
    }
}

getCafeteriasPorId = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const cafeteria = postCafeteria(id);
        res.send(cafeteria);

    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor"})
    }
}

module.exports = {
    getAllCafeterias, getCafeteriasPorId
}