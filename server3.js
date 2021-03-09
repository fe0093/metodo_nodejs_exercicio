
//Abrindo requests para a biblioteca e criando a entrada para a porta 3000
const http = require('http');
const express = require('express');
const app = express();
const porta = 3000;

//criando um método para atribuir para uma string o valor da porta, bem como o valor inteiro de 3000 para ainda subir na porta.
app.set('port', porta);
const server = http.createServer(app); //Aqui eu estou criando o servidor. O Http é uma biblioteca padrão do Node. Contudo escolhi fazer pelo express (app).
server.listen(3000); // Estou falando para o Node que eu quero subir essa aplicação na porta 3000

// atribuindo a clientes um pacote de dados json em um conjunto. Um conjunto é formado por [] e dentro dele estão os pacotes json formados por {}
let contador = 2; // logo após as instruções require
const bodyParser = require ('body-parser');
app.use (bodyParser.json());
const clientes = [
  {
    id: 1,
    nome: "Joao",
    email: "joao@email.com",
  },
  {
    id: 2,
    nome: "Cristina",
    email: "cristina@email.com",
  },
];


//Através de um método Get eu faço uma requisição e recebo uma resposta (req, res) E essa resposta é um pacote de dados .json
//Next serve para ver se existe uma próxima requisição
// O professor chama ele de Retrieve
app.get("/clientes", (req, res, next) => {
    res.json(clientes);
  });
  

//Create
app.post("/clientes", (req, res, next) => {
  const cliente = req.body;
  clientes.push({
    id: (contador += 1),
    nome: cliente.nome,
    email: cliente.email,
  });
  console.log(clientes);
  res.status(201).json(clientes);
});

//
app.put("/clientes",(req, res, next)=>{
  clientes.forEach((cliente) =>{
    if(cliente.id === req.body.id){
      cliente.nome = req.body.nome;
      cliente.email = req.body.email;
    }
  })
      res.status(200).json(clientes);
});

//
app.delete("/clientes/:id", (req, res, next)=>{
  const idClienteDeletado = req.params.id;
  clientes.forEach((cliente, index)=>{
    if (cliente.id == idClienteDeletado) clientes.splice(index, 1);
  })

  //
    res.status(200).json(clientes);
});


/* ou
app.delete("/clientes", (req, res, next)=>{
  clientes.forEach((cliente => {
    if (cliente.id == req.body.id)
    {
        const index = clientes.indexOf(cliente,0); --> O zero significa que ele vai pegar os clientes por registro a partir do zero
        clientes.splice(index,1) --> o splice serve para apagar o cliente através do id, já que o id é o que está comparando o cliente e ele não se repete
        --> o número 1 significa que ele vai sempre deixar 1
    }
})
    res.status(200).json(clientes);
});*/
