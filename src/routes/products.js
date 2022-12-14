const express = require('express'); // Accedo a los archivos de la Lib.

const ctrlProducts = require('../controllers/products'); // Acceder a la Controladora

const router = express.Router(); // Instacio el router

router.get('/',ctrlProducts.getProducts) // Esucha en el método GET en /productos/

router.get('/id/:id',ctrlProducts.getProductsById) // Esucha en el método GET en /productos/

router.get('/nombre/:name',ctrlProducts.getProductsByName) // Esucha en el método GET en /productos/

router.post('/',ctrlProducts.addProduct) // Esucha en el método Post en /productos/

router.delete('/:id',ctrlProducts.deleteProductById) // Esucha en el método Delete en /productos/

router.patch('/:id', ctrlProducts.updateProductById); // Esucha en el método Put en /productos/

module.exports = router // Habilito la importación en otros lugares.