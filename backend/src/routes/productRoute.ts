import express from 'express'
import { addProduct } from '../controllers/productController'

const router  = express.Router()

router.post('/add-product',addProduct)
router.get('products')
router.get('product/:id')



export default router