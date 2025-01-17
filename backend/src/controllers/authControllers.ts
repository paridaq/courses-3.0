import userModel from "../models/userModel";
import {Request,Response} from 'express'
type User = {
    name:string;
    email:string;
    password:string;
    address:string;
    phone:number
}
export const registerController =async(req:Request,res:Response):Promise<any>=>{
    const {name,email,password,address,phone} = req.body as User;
    try {

        if(!name){
           return  res.send({
                message:'name is required'
            })
        }
        if(!email){
          return   res.send({
                message:'email is required'
            })
        }
        if(!address){
            return res.send({
                message:'address is require '
            })
        }
        if(!phone){
            return res.send({
                message:'Phone Number is required'
            })
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
           return  res.send({
                message:'user already exist'
            })
        }
        const newuser = new userModel({name,email,password,address,phone});
        await newuser.save();
        res.status(201).send({
            success:true,
            message:'registerd succesfully',
            newuser

        })
        
        
    } catch (error) {
        console.log(error);
        res.send({
            success:false,
            message:'server error'
        })
        
    }
}

export const loginController=async(req:Request,res:Response):Promise<any>=>{
    const{email,password} = req.body as User;
    try {
        if(!email){
            return res.send({
                message:'email is required'
            })
        }
        if(!password){
            return res.send({
                message:'password is required'
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.send({
                message:'Invalid emailId'
            })
        }
        if(user.password !=password){
            return res.send({
                message:'wrong password'
            })
        }
        return res.status(200).send({
            success:true,
            messsage:'Logedin succesfully',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'server error',
            error
        })
    }
}


export const deleteUser=async(req:Request,res:Response)=>{
    const {email,name,password} = req.body as User

}
