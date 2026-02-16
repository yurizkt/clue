const fs = require("fs");

getCafeterias = () => {
    const data = fs.readFileSync("./cafeterias.json");
    return JSON.parse(data);
}

postCafeteria = (id) => {
    const data = JSON.parse(fs.readFileSync("./cafeterias.json"));
    return data.filter(cafeteria => cafeteria.id === id);
}

module.exports = {
    getCafeterias, postCafeteria
}