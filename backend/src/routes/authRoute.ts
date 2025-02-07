import express from 'express'
import { getuserDetails, loginController, registerController } from '../controllers/authControllers';
import { adminCheck } from '../middlewares/adminMiddleware';


const router = express.Router();


router.post('/register',registerController );
router.post('/login',adminCheck,loginController)

router.get('/user-details/:email',getuserDetails);

export default router;