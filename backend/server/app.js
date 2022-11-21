//Express configuration
import express from 'express';
import productsRoutes from './routes/productsRoutes.js';
import fileUpload from 'express-fileupload';

const app = express();

//Middleware - Esto es para que el servidor pueda entender los datos que le enviamos
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './files'
}))

//Routes
app.use(productsRoutes);

export default app;
