const express = require('express');

const cafeteriasRouter = require('./cafeterias');
const favoritosRouter = require('./favoritos');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173'}));

app.use('/cafeterias', cafeteriasRouter);
app.use('/favoritos', favoritosRouter);

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)

})