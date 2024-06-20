import express from 'express';
import { registerUser } from '../controller/user.controller.js';

const app = express.Router();

app.post('/register', registerUser);

export default app;