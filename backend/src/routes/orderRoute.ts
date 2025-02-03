import express from 'express'
import { createOrder, verifyOrder } from '../controllers/orderController'

const router = express.Router()

router.post('/create-order',createOrder)
router.post('/verify-order/:email',verifyOrder)
export default router