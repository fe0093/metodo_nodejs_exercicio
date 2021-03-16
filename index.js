const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);

let id = 2;

let livros = [{
    id: 1,
    isbn: '8536515694, 9788536515694',
    titulo: 'Java 8 – Ensino Didático',
    descricao: 'O livro aprimorará os ensinamentos em orientação em objetos dos estudantes',
    edicao: '1ª',
    autor: 'Sergio Furgeri'
  },
  {
    id: 2,
    isbn: '9788131800409, 8131800407',
    titulo: 'Straight to the Point : My SQL 5.0',
    descricao: 'Conta direto ao ponto sobre as aplicações do MySQL',
    edicao: 'Capa Dura',
    autor: ' Dinesh Maidasani'
  }
];

let livros2 = [];

app.set('port', porta);
app.get('/livros', (req, res, next) => {
  res.json(livros)
});

app.get("/livros", (req, res, next) => {
  res.status(200).json(livros);
});

app.post('/livros', (req, res, next) => {
  const livro = req.body;
  livros.push({
    id: id += 1,
    isbn: req.body.isbn,
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    edicao: req.body.edicao,
    autor: req.body.autor
  });
  livros.push(livro);
  res.status(201).json(livro);
});

app.put("/livros", (req, res, next) => {
  livros.forEach((livro) => {
    if (livro.id === req.body.id) {
      livro.isbn = req.body.isbn,
        livro.titulo = req.body.titulo,
        livro.descricao = req.body.descricao,
        livro.edicao = req.body.edicao,
        livro.autor = req.body.autor
    }
  })
  res.status(204).json(livros);
});

app.delete("/livros", (req, res, next) => {
  livros.forEach((livro) => {
    if (livro.id != req.body.id) {
      const livro2 = {
        id: livro.id,
        isbn: livro.isbn,
        titulo: livro.titulo,
        descricao: livro.descricao,
        edicao: livro.edicao,
        autor: livro.autor
      }
      livros2.push(livro2)
    }
  })
  livros = livros2;
  
  res.status(204).json(livros);
});