import {Request,Response} from 'express'

import userModel from "../models/userModel";
import productModel from "../models/productModel";

 type User = {
    email:string,
    productName:string,
    productPrice:number,
    
}


export const placeOrder = async(req:Request,res:Response):Promise<any>=>{

    const {email,productName,productPrice} = req.body as User
    try {
        if(!email || !productName || !productPrice){
            return res.send({
                message:'All field is required'
            })
        }
        const user = await userModel.findOne({email})
       
        const product = await productModel.findOne({productName})
        if(!product){
            return res.send({
                message:'product not found to buy'
            })
        }
        if(!user){
            return res.send({
                message:'user not found '
            })
        }
        user.purchasedProducts.push({
            product
        paidPrice:productPrice
        })

    } catch (error) {
        
    }
}


