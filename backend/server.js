import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './database/databaseConnection.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';

dotenv.config({
    path: './config/config.env'
})

connectDatabase();


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRouter);


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
});