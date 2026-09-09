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

// Middleware necessário para que o Express consiga ler o corpo (body) das requisições POST em formato JSON
app.use(express.json());

const produtos = require('./produtos.json');

// Listar todos os produtos
app.get('/produtos', (req, res) => {
  res.status(200).json(produtos);
});

// BUSCAR PRODUTO POR ID (Nova rota)
app.get('/produtos/:id', (req, res) => {
  // Convertemos o id do parâmetro para número, pois no req.params ele vem como string
  const idBusca = parseInt(req.params.id);
  
  // Procura o produto no array
  const produto = produtos.find(p => p.id === idBusca);

  // Se o produto não for encontrado, retorna erro 404
  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }

  // Se encontrar, retorna o produto com status 200
  res.status(200).json(produto);
});

// Criar novo produto
app.post('/produtos', (req, res) => {
  const produto = { id: produtos.length + 1, ...req.body };
  produtos.push(produto);
  res.status(201).json(produto);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
