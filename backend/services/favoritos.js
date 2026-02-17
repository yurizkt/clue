const fs = require("fs");

getCafeteriasFavoritas = () => {
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

deletaFavoritoPorId = (id) => {
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

    const novaListaFavoritos = favoritos.filter(favorito => favorito.id !== Number(id));
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos));
}

favoritaCafeteria = (id) => {
    const cafeterias = JSON.parse(fs.readFileSync("cafeterias.json"));
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

    const cafeteriaFavoritada = cafeterias.find(cafeteria => cafeteria.id === Number(id));
    const novaListaFavoritos = [...favoritos, cafeteriaFavoritada];
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos));
}

module.exports = {
    getCafeteriasFavoritas,
    favoritaCafeteria,
    deletaFavoritoPorId
}