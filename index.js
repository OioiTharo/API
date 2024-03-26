const express = require('express');
const cors = require('cors');
const hoteis = require('./hoteis.json');
const path = require('path');

const server = express();
const PORT = 8080;

server.use(cors());
server.use(express.static(path.join(__dirname,'public')));

server.get('/hoteis', (req,res) => {
    res.json(hoteis);
})

server.listen(PORT, () => {
    console.log('Servidor em funcionamento em http://localhost:${PORT}');
});