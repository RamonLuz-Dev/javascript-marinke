// const http = require('http');

// const hostname = '0.0.0.0';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain; charset=utf-8');
//     res.end('Codespace Node rodando com sucesso');
// });

// server.listen(port, hostname, () => {
//     console.log('Servidor na porta 3000');
// });

const express = require('express');

const app = express();
const port = 3000;

const produtos = require('./produtos.json');

app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
