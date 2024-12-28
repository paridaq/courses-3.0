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
        if(!user){
            return res.send({
                message:'user not found '
            })
        }
       
        const product = await productModel.findOne({productName})
        if(!product){
            return res.send({
                message:'product not found to buy'
            })
        }
     
        user.purchasedProducts.push({
            product:product._id,
            paidPrice:productPrice,
            dateOfPurchase:new Date()
        })
        await user.save();
        return res.status(200).send({
            success:true,
            message:'order placed successfully',
            user
        })
 
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'server error(during purchasing the product)',
            error
        })
        
    }
}


