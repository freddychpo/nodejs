
//Usamos framework express
const express = require('express');
const app = express();

//manejador de funcion
app.get('/', (req, res) => {
	res.send('recibido');
});

app.post('/', (req, res) => {
	res.send('guardando...')
});

app.put('/', (req, res) => {
	res.send('actualizando...')
});

app.delete('/', (req, res) => {
	res.send('eliminando...')
});


//inicio el servidor en el puerto 3000
app.listen(3000, () => {
	console.log('server on port 3000');
});
