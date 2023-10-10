const express = require('express');
const app = express();
const port = 4000;

// Define a rota para a página HTML
app.get('/livros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros/listLivros.html');
});

// Define a rota para a página HTML
app.get('/addlivros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros/livros.html');
});

// Define a rota para a página HTML
app.get('/editlivros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros/editLivro.html');
});




// Define a rota para a página HTML
app.get('/categorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias/listCategorias.html');
});

// Define a rota para a página HTML
app.get('/addcategorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias/categorias.html');
});

// Define a rota para a página HTML
app.get('/editcategorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias/editCategoria.html');
});




app.get('/usuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios/listUsuarios.html');
});

// Define a rota para a página HTML
app.get('/addusuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios/usuarios.html');
});

// Define a rota para a página HTML
app.get('/editusuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios/editUsuarios.html');
});



// Define a rota para a página HTML
app.get('/pedidos', (req, res) => {
  res.sendFile(__dirname + '/pages/pedidos/listPedidos.html');
});

// Define a rota para a página HTML
app.get('/addpedidos', (req, res) => {
  res.sendFile(__dirname + '/pages/pedidos/pedidos.html');
});

// Define a rota para a página HTML
app.get('/editpedidos', (req, res) => {
  res.sendFile(__dirname + '/pages/pedidos/editPedidos.html');
});



// Define a rota para a página HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
