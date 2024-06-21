import express from 'express';
import { registerUser } from '../controller/user.controller.js';
import { singleUpload } from '../middleware/multer.midlleware.js';

const app = express.Router();

app.post('/register', singleUpload , registerUser);

export default app;