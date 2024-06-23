import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './database/databaseConnection.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import eventRouter from './routes/event.route.js';
import teamRouter from './routes/team.route.js';
import {v2 as cloudinary} from 'cloudinary';
import errorMiddleware from './middleware/error.js';

dotenv.config({
    path: './config/config.env'
})

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/event', eventRouter);
app.use('/api/team', teamRouter);

app.use(errorMiddleware);
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
});