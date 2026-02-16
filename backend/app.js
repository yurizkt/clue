const express = require('express');

const cafeteriasRouter = require('./routes/cafeterias');
const favoritosRouter = require('./routes/favoritos');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*'}));

app.use('/cafeterias', cafeteriasRouter);
app.use('/favoritos', favoritosRouter);

const port = 8000;
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})