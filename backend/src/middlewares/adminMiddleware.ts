import express from 'express'
 import { NextFunction,Request,Response } from 'express'
 interface AuthRequest extends Request{
    isAdmin?:boolean;
 }
 

 export const adminCheck=(req:AuthRequest,res:Response,next:NextFunction)=>{
 const {email,password} = req.body;
 try{

 if(email==="paridabiswa2k@gmail.com" && password==='fucker'){
    req.isAdmin=true;
    next();
 
 }
}catch(error){
    console.log(error)
}
}