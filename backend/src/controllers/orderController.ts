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

export const createOrder = async(req:Request,res:Response):Promise<any>=>{
    const{productName,price} = req.body;
    
    const razorpay = new Razorpay({
        key_id: process.env.KEY_ID || '',
        key_secret: process.env.KEY_SECRET || ''
    })

    const options = {
        "amount":100*price,
        "currency"
        
    }

}


