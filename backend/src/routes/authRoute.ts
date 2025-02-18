import express from 'express'
import { getuserDetails, getuserName, loginController, registerController } from '../controllers/authControllers';



const router = express.Router();


router.post('/register',registerController );
router.post('/login',loginController)

router.get('/user-details/:email',getuserDetails);
router.get('/get-name/:email',getuserName)

export default router;