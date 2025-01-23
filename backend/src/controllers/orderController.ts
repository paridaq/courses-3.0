import {Request,Response} from 'express'
import Razorpay from 'razorpay';
import dotenv from 'dotenv'

import userModel from "../models/userModel";
import productModel from "../models/productModel";


 type User = {
    email:string,
    productName:string,
    productPrice:number,
    
    
}
const razorpay = new Razorpay({
    key_id: process.env.KEY_ID || '',
    key_secret: process.env.KEY_SECRET || ''
})


export const createOrder = async(req:Request,res:Response):Promise<any>=>{
    const{productName,price} = req.body;
    try{
   
    const options = {
        amount:100*price,
        currency:"INR",
        receipt:`reciept_${Date.now()}`,
    }
    const order = razorpay.orders.create(options)
    return res.status(200).send({
        success:true,
        message:'order created succesfully',
        order
    })
    }catch(error){
        console.log(error)
        return res.send({
            success:false,
            message:'server error during creating order',
            error
        })
    }

}

export const verifyOrder = async(req:Request,res:Response):Promise<any>=>{
    const{orderId,paymentId,signature,productName,productPrice} = req.body
}


