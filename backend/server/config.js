import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

//Database connection
export const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://cluster0.mpiizws.mongodb.net/testdb';

//Server port
export const PORT = process.env.PORT;

//Cloud storage
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
