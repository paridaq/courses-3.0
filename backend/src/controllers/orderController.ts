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
    key_id:  'rzp_test_09VQZ4hfMNl1a6',
    key_secret:  'sdqJcIOjMjQlHBupF5mkJvzD'
})


export const createOrder = async(req:Request,res:Response):Promise<any>=>{
    const{productName,productPrice} = req.body;
    if(!productName){
        return res.send({
            message:'product name is required'
        })
    }   
    if(!productPrice){
        return res.send({
            message:'product price is required'
        })
    }
    try{
   
    const options = {
        amount:100*productPrice,
        currency:"INR",
        receipt:`reciept_${Date.now()}`,
    }
    const order = await razorpay.orders.create(options)
    console.log(order)
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
    productName:string;
    productPrice:number;
    
}

export const verifyOrder = async(req:Request,res:Response):Promise<any>=>{
    const {email} = req.params;
    const{orderId,paymentId,signature,productName,productPrice,} = req.body as source
    console.log(orderId,paymentId,signature,productName,productPrice)
    try{

    const generateSignature = crypto
    .createHmac('Sha256', 'sdqJcIOjMjQlHBupF5mkJvzD')
    .update(orderId+'|'+paymentId)
    .digest('hex');
    if(generateSignature!=signature){
        return res.send({
            messsage:'signature does not matches'
        })
       
    }
    const product = await productModel.findOne({productName})
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
                productName,
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


export const deleteProduct = async(req:Request,res:Response):Promise<any>=>{

    const {email} = req.params;

}



//rzp_test_j6xXLOOm95LXs2
        //YETDlFF8bY9QY4wPiBAF7Ntn