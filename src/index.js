// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })
// app.listen(3000, () => {
//      console.log('Example app listening on port')
// })

require("dotenv").config(); //llama la función Config de la librería dotenv
const mongoose = require('mongoose') //Guarda una variable con el acceso la librería de Mongoose
const products = require('../data/productos.json') //Array de objetos
const router = require('./routes/index') // Rutas creadas
const express = require('express') //Guarda una variable con el acceso la librería Express

const app = express(); //Instancia un objeto Express en app y levanta el proceso del servidor

app.use(express.json()); // nos permite obtener el cuerpo del json en el el req.body (controllers)
app.use(express.static("public"));

app.use(router); // Le dice a Express que use el Router

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });
