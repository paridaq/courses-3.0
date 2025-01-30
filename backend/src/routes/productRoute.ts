import express from 'express'
import { addProduct, getProducts } from '../controllers/productController'

const router  = express.Router()

router.post('/add-product',addProduct)
router.get('/get-products',getProducts)




export default router