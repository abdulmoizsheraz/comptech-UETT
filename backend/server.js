import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './database/databaseConnection.js';
import cookieParser from 'cookie-parser';

dotenv.config({
    path: './config/config.env'
})

connectDatabase();


const app = express();
app.use(express.json());
app.use(cookieParser());



app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
});