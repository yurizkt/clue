const fs = require("fs");

getFavoritos = () => {
    const data = fs.readFileSync("./favoritos.json");
    return JSON.parse(data);
}

deletaFavorito = (id) => {
    const favoritos = JSON.parse(fs.readFileSync("./favoritos.json"));

    const novaListaFavoritos = favoritos.filter(favorito => favorito.id !== id);
    fs.writeFileSync("./favoritos.json", JSON.stringify(novaListaFavoritos));
    return novaListaFavoritos;
}

favoritaCafeteria = (id) => {
    const cafeterias = JSON.parse(fs.readFileSync("./cafeterias.json"));
    const favoritos = JSON.parse(fs.readFileSync("./favoritos.json"));

    const cafeteriaFavoritada = cafeterias.filter(cafeteria => cafeteria.id === id);
    const novaListaFavoritos = [...favoritos, cafeteriaFavoritada];
    fs.writeFileSync("./favoritos.json", JSON.stringify(novaListaFavoritos));
    return novaListaFavoritos;
}

module.exports = {
    getFavoritos, deletaFavorito, favoritaCafeteria
}