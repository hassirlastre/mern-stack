import { Router } from 'express';

//Importing functions from the controllers
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsControllers.js';

const router = Router();

//Get all products
router.get('/products', getProducts);

//Get a product by id
router.get('/products/:id', getProduct);

//Create a new product
router.post('/products', createProduct);

//Update a product
router.put('/products/:id', updateProduct);

//Delete a product
router.delete('/products/:id', deleteProduct);

export default router;
