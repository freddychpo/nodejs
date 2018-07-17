const { products } = require('../db.json');

module.exports = {

	getProducts: (req, res) => {
		res.json({products}) //manera abrev de js
	},

	addProduct: (req, res) => {
		//console.log("recibiendo datos...");
		//console.log(req.body);

		const { name } = req.body;

		//agregar dato al arreglo
		products.push({
			name,
			id: products.length
		});
		
		res.json({
			'success': true,
			'msg': 'successfully added'
		});
	},

	updateProduct: (req, res) => {
		//recibir el id
		console.log(req.params.id);

		const { id } = req.params;

		const { name } = req.body;

		products.forEach((product, i) => {
			if (product.id === Number(id)) { 
				product.name = name;
		}

		});

		res.json({
			'success': true,
			'msg': 'updated'
		})
	},

	deleteProduct: (req, res) => {
		const { id } = req.params;
		products.forEach((product, i) => {
			if (product.id === Number(id)){
				products.splice(i, 1);
			}
		});
		res.json({
			'success': true,
			'msg': 'deleted'
		})
	}
};