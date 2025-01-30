import {Request,Response} from 'express'
import Razorpay from 'razorpay';
import dotenv from 'dotenv'
import crypto from 'crypto'
import mongoose, { Date } from 'mongoose';


import userModel from "../models/userModel";
import productModel from "../models/productModel";


 type User = {
    email:string,
    productName:string,
    productPrice:number,
    
    
}
const razorpay = new Razorpay({
    key_id: process.env.KEY_ID || 'rzp_test_3QUeZLNDH6a9tl',
    key_secret: process.env.KEY_SECRET || ''
})


export const createOrder = async(req:Request,res:Response):Promise<any>=>{
    const{productName,productPrice} = req.body;
    try{
   
    const options = {
        amount:100*productPrice,
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
type source ={
    orderId:any;
    paymentId:any;
    signature:any;
    courseName:string;
    productPrice:number;
    
}

export const verifyOrder = async(req:Request,res:Response):Promise<any>=>{
    const {email} = req.params;
    const{orderId,paymentId,signature,courseName,productPrice,} = req.body as source
    try{

    if (!process.env.KEY_SECRET) {
        return res.status(400).send({
            success: false,
            message: 'KEY_SECRET is not defined'
        });
    }
    const generateSignature = crypto
    .createHmac('Sha256', process.env.KEY_SECRET)
    .update(orderId+'|'+paymentId)
    .digest('hex');
    if(generateSignature!=signature){
        return res.send({
            messsage:'signature does not matches'
        })
       
    }
    const product = await productModel.findOne({productName:courseName})
    if (!product) {
        return res.status(404).send({
            success: false,
            message: 'Product not found'
        });
    }
    
    // const user = await userModel.findOne({email})
    // if(!user){
    //     return res.send({
    //         message:'user not registered'
    //     })
    // }
    // const orderDate = new Date()
  
  const user = await userModel.findOneAndUpdate(
    {email},
    {
        $push:{
            purchasedProducts:{
                productName:courseName,
                paidPrice:productPrice,
                dateOfPurchase: new Date()
            }
        }
    },
    {new:true}
  )
    
    
    return res.send({
        success:true,
        message:'purchased succesfully',
        user
    })
       }catch(error){
        console.log(error)
        return res.send({
            success:true,
            message:'server error during verifying the order',
            error

        })
    }
   
}


