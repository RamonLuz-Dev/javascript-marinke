const produtos = [
    {
        id: 1, nome: "Notebook", preco: 3500
    }
];

const service = require ("../services/produto.service");

exports.listar = (req, res) => {
    res.json(produtos);
};

exports.buscarPorId = (req, res) => {
    const produto = service.buscarPorId(req.params.id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }
    res.status(200).json(produto);
};

exports.criar = (req, res) => {
    const produto = {id: 2, ...req.body};
    produtos.push(produto);
    res.status(201).json(produto);
};