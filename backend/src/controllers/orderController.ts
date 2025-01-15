import {Request,Response} from 'express'

import userModel from "../models/userModel";
import productModel from "../models/productModel";

 type User = {
    email:string,
    productName:string,
    productPrice:number,
    
    
}



