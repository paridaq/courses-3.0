import {Request,Response} from 'express'
import productModel from "../models/productModel";

import userModel from "../models/userModel";
// i know i can create a separate file for types then i am gone import it i do like this for syntax memorization

type User={
    productName:string,
    price:number,

}

export const addProduct = async(req:Request,res:Response):Promise<any>=>{
    const {productName,price} = req.body as User
    try {
        if(!productName){
            return res.send({
                message:'productname is required'
            })
        }
        if(!price){
            return res.send({
                message:'price is required'
            })
        }
        const registeredProduct = new productModel({productName,price})
        await registeredProduct.save();
        return res.status(200).send({
            success:true,
            message:'product registerd successfully',
            registeredProduct
        })
    } catch (error) {
        
    }
}