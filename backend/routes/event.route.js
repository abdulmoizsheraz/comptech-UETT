import express from 'express';
import { AuthenticateUser } from '../middleware/Authenticate.js'
import { deleteEvent, getAllEvents, getEventById, registerEvent, updateEvent } from '../controller/event.controller.js';
import { singleUpload } from '../middleware/multer.midlleware.js'

const app = express.Router();

app.get('/all', getAllEvents);
app.get('/single/:id', getEventById);

app.use(AuthenticateUser);
app.post('/create', singleUpload , registerEvent);
app.put('/update/:id', updateEvent);
app.delete('/delete/:id', deleteEvent);


export default app;