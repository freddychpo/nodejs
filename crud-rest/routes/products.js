const express = require("express");
const router = express.Router();
//enrutador aqui tienes una nuva ruta llamada incio, about, etc

//router.get('/', (req, res) => {})

//importar productos
//const products = require('../db.json');

//mediante destructura
//const { products } = require('../db.json');

//const controllers  = require('../controllers/products');
//const {getProducts, addProduct}  = require('../controllers/products');

const {
	getProducts, 
	addProduct,
	updateProduct,
	deleteProduct
}  = require('../controllers/products');




//mostrar en consola
//console.log(products);
//console.log(products.products);

router.route('/') 
	.get(getProducts)
	.post(addProduct);

//localhost:3000/products/3
router.route('/:id') 
	.put(updateProduct) //actualizar
	.delete(deleteProduct)

module.exports = router;

