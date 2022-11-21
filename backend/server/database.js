import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

export async function DBConection() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log('Database is connected');
  } catch (error) {
    console.log(error.message);
  }
}
