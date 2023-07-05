const express = require("express");
const app = express();
const port = process.env.PORT || 3001;


// Middleware para habilitar CORS
app.use(cors());

// Middleware para analizar solicitudes con cuerpo JSON
app.use(express.json());

app.get("/mirror/:parametro", (req, res) => {
  const parametro = req.params.parametro;
  const response = { respuesta: parametro };
  res.json(response);
});

app.get("/mirror/", (req, res) => {
  const parametro = req.query.parametro;
  const response = { parametro: parametro };
  res.json(response);
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

