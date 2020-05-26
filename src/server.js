const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./routes.js'));

app.listen(3333, () => console.log("Servidor Rodando..."));