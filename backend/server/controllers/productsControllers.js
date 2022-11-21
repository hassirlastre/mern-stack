import Product from '../models/productsModel.js';
import { uploadImage, deleteImage } from '../libraries/cloudinary.js';
import fs from 'fs-extra';

//Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

//Get product by id
export const getProduct = async (req, res) => {
  try {
    const productById = await Product.findById(req.params.id);

    if (!productById) {
      return res.status(404).send('The product was not found');
    } else {
      return res.json(productById);
    }
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

//Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;

    var image = null;

    if (req.files.image) {
      const uploadFile = await uploadImage(req.files.image.tempFilePath);
      image = {
        url: uploadFile.secure_url,
        public_id: uploadFile.public_id,
      };
      await fs.remove(req.files.image.tempFilePath);
    }

    const product = new Product({ name, description, price, image, stock });
    await product.save();
    return res.json(product);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

//Update a product
export const updateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.send('The product was updated');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

//Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      res.status(404).send('The product was not found');
    } else {
      if (deletedProduct.image.public_id) {
        await deleteImage(deletedProduct.image.public_id);
      }
      res.status(204).send('The product was deleted');
    }
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
