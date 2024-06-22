import express from 'express';
import { deleteUser, getAllUsers, getUser, loginUser, logoutUser, registerUser, updateUser, updateUserImage } from '../controller/user.controller.js';
import { singleUpload } from '../middleware/multer.midlleware.js';
import { AuthenticateUser } from '../middleware/Authenticate.js';

const app = express.Router();

app.post('/register', singleUpload , registerUser);
app.post('/login', loginUser);

app.use(AuthenticateUser);

app.get('/logout', logoutUser);
app.get('/all', getAllUsers);
app.delete('/delete/:id', deleteUser);
app.get('/user/:id', getUser);
app.put('/update/:id', updateUser);
app.put('/updateimg/:id', singleUpload , updateUserImage);



export default app;