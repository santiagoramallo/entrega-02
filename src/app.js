const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const PUERTO = 8080;
require("./database.js");

const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js");
const viewsRouter = require("./routes/views.router.js");


//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("./src/public"));


//Motor de plantillas:
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");


//Rutas
app.use("/api/products",productsRouter)
app.use("/api/carts",cartsRouter)
app.use("/", viewsRouter);


app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});