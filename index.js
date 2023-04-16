const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación en Express!');
});

app.get('/clientes', (req, res) => {
  res.send('Estos son mis tres clientes: Gonzalo, Anita y Pedrito.');
});

app.get('/productos', (req, res) => {
  res.send('Estos son mis tres productos: Audifonos, Mouse y Teclado.');
});

app.listen(5000, () => {
  console.log('La aplicación está corriendo en http://localhost:5000');
});

