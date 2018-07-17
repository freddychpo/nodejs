

const morgan = require("morgan"); 
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

const productsRoutes = require('./routes/products');

//servidor de express
//se divide en estas partes:

//settings
app.set('json spaces', 4);


//middlewares (morgan y bodyparser)
app.use(morgan('dev')); //muestra en consola los metodos que se van pidiendo/ejecutando
app.use(bodyParser.json()); //servidor escuche datos directamente de un app en formato json
app.use(bodyParser.urlencoded({extended: false})); //formulario se envia a traves de la url

//routes

app.use('/products', productsRoutes);

//static files
//start server

app.listen(3000, () => {
	console.log("server on port", 3000);
})