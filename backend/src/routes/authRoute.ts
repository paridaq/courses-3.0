import express from 'express'
import { getuserDetails, loginController, registerController } from '../controllers/authControllers';


const router = express.Router();


router.post('/register',registerController );

router.get('/user-details/:email',getuserDetails);

export default router;