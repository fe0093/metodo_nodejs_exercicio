const http = require('http');
const express = require('express'); //iMPORTANDO BIBLIOTECAS (HTTP, EXPRESS)

const app = express(); //Sempre que eu tenho parenteses depois de uma variável eu to CHAMANDO uma função
//E eu estou, nessa linha 4, criando um App que estará atribuído o método Express. O app poderá chamar
//os códigos que estão na biblioteca.
//Minúscula é uma variável e MAIÚSCULA É UMA CLASSE
const porta = 3001; //Javascript não precisa declarar tipo, por enquanto use sempre const.
app.set('port', porta);// estou chamando um método que o primeiro parâmetro é a string port, e o segundo é um int = 3000.
//Ela ainda VAAI subir na 3000.
const clientes = [];
let incremento = 0;
app.get("/teste2", (req, res, next) => {
    incremento++;
    clientes.push({felipe:incremento}) // é equivalente ao clientes.add do Java
    //ele nunca vai incrementar no cliente, mas sim no servidor, e mandar a resposta inteira do request
    // que você está solicitando para ele. Ele retorna tudo, pois a variável cliente é que está armazenando esse Array.
    res.send(clientes);
});

/* O código acima está dizendo que, ele recebeu um chamado e ele vai fazer alguma coisa.
no caso ele está respondendo a rota para o /teste
req --> É o que o cliente mandou pra você (servidor)
res --> É response, que significa tudo que o servidor for retornar para o cliente
next --> É o próximo da pilha. No /teste temos uma pilha de métodos a serem executados

*/

const server = http.createServer(app); //Aqui eu estou criando o servidor. O Http é uma biblioteca padrão do Node
//ele vai esperar que você converse com ele através dela. Só que você, felipe, escolheu usar o express para poder conversar com o servidor.
server.listen(porta);
// Estou falando para o Node que eu quero subir essa aplicação na porta 3000