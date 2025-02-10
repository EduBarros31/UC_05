
//importa o modulo express
const express = require('express');

//cria um arquivo de ambiente
const dotenv = require('dotenv');

//configura o arquivo de ambiente
dotenv.config();

//cria uma instancia do express
const app = express();

//cria uma constante para a porta
const PORT = process.env.PORTA || 3000;

//configura o express para receber dados em formato json
app.use(express.json());

//cria um array de livros
const livros = [];

//cria uma rota para a raiz do projeto
app.get('/livros', (requisicao, resposta) => {
  resposta.status(201).json(livros);});

//cria uma rota para adicionar um novo livro
app.post('/livros', (requisicao, resposta) => {
    const { id, titulo, autor, ano_publicacao, genero} = requisicao.body;
//cria um novo livro
    const novoLivro = {
        id,
        titulo,
        autor,
        ano_publicacao,
        genero
    };
//adiciona o novo livro ao array de livros
    livros.push(novoLivro);
//  retorna o novo livro
return resposta.status(201).json(novoLivro);
  });
    
  //cria uma rota para atualizar um livro
    app.listen(PORT, () => {
        console.log(`O servidor está rodando em http://localhost:${PORT}`);
    });

