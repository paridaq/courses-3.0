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


export const getuserDetails = async(req:Request,res:Response):Promise<any>=>{
    const {email} = req.params ;
    if(!email){
        return res.send({
            message:'email required to get details '
        })
    }
    try {
        const details = await userModel.findOne({email});
        if(!details){
            return res.send({
                message:'No details found regarding the user'
            })
        }
        return res.status(200).send({
            success:true,
            message:'user details found succesfully',
            details
        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'server error ',
            error
        })
        
    }
}

export const loginController =async(req:Request,res:Response):Promise<any>=>{
   const {email,password} = req.body as User

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
   try {
    const user = await userModel.findOne({email});
    if(!user){
        return res.send({
            message:'register befor Login'
        })

    }
    if(user.password !=password){
        return res.send({
            message:'password does not match'
        })
    }
    return res.status(200).send({
        success:true,
        message:'login successful',
        user
    })
   } catch (error) {
    console.log(error)
    return res.status(500).send({
        success: false,
        message:'server error during login',
        error
    })
    
   }


}