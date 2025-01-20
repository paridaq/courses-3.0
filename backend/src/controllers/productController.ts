import {Request,Response} from 'express'
import productModel from "../models/productModel";

import userModel from "../models/userModel";
import { tracingChannel } from 'diagnostics_channel';
// i know i can create a separate file for types then i am gone import it i do like this for syntax memorization
//we use promise<any> because this asynchronous function can return any type like any means 
// here may b integer ,boolean,string etc so we use any here is promise

type Product={
    productName:string,
    price:number,

}
export const addProduct = async(req:Request,res:Response):Promise<any>=>{
    const {productName,price} = req.body
    try {
        if(!productName){
            return res.send({
                message:'product name is required '
            })
        }
        if(!price){
            return res.send({
                message:'setting price of the product is required'
            })
        }
        const existingproduct = await productModel.findOne({productName})
        if(existingproduct){
            return res.send({
                message:'product in this name already exist'
            })
        }
        const newProduct = new productModel({productName,price})
        await newProduct.save()
        return res.status(201).send({
            success:true,
            message:'product succesfully created',
            newProduct
        })
        
    } catch (error) {
        console.log(error)
       return  res.status(404).send({
            message:'error in addding the product'
        })
        
    }
}



export const removeProduct = async(req:Request,res:Response):Promise<any>=>{
      const {productName} = req.body as Product

      try {
        const removedProduct = await productModel.findOneAndDelete({productName})
        if(!removedProduct){
            return res.send({
                message:'product not found'
            })
        }
        return res.status(201).send({
            success:true,
            message:'product deleteed succesfully',
            removedProduct
        })
      } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'server error,error while deleting the product'
        })
      }

1
}

// runvalidators :true option ensure thatthe validators are executedbefore
//the document is updated in the database (it is part of mongoose library)

export const updateProduct = async(req:Request,res:Response):Promise<any>=>{
   const {id,productName,price} = req.body as {id:string} & Product 
   try {
    const updatedProduct = await productModel.findByIdAndUpdate(id,{productName,price},{new:true,runValidators:true})
    if(!updatedProduct){
        return res.send({
            message:'product not found to update'
    })
    }
    return res.status(200).send({
        success:true,
        message:'product details updated successfully'
    })

   } catch (error) {
    console.log(error)
    return res.status(500).send({
        success:false,
        message:'error in updateing the product details'
    })
   }
}