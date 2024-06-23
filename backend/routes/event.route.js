import express from 'express';
import { AuthenticateUser } from '../middleware/Authenticate.js'
import { getAllEvents, registerEvent } from '../controller/event.controller.js';
import { singleUpload } from '../middleware/multer.midlleware.js'

const app = express.Router();

app.get('/all', getAllEvents);

app.use(AuthenticateUser);
app.post('/create', singleUpload , registerEvent);


export default app;