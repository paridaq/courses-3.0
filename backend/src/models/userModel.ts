import productModel from './productModel';
import mongoose,{Schema,Document} from 'mongoose'

interface purchasedProduct extends Document {
    
    productName:string;
    paidPrice:number,
    dateOfPurchase:Date;
}
interface User extends Document{
    name:string,
    email:string,
    password?:string;
    address:string,
    phone:Number,
    purchasedProducts:purchasedProduct[];

    
}
//document typescript interface provided by mongoose library




const userSchema:Schema = new mongoose.Schema<User>({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:Number
    },
    purchasedProducts:[
        {
        
            productName:{
                type:String,
                required:true
            },
            
            paidPrice:{
                type:Number,
                required:true
            },
            dateOfPurchase:{
                type:Date,
                required:true,
            }
           
          
        }
    ]

},{timestamps:true})

export default mongoose.model<User>('User',userSchema)

/*
this is how the table gone show after purchasing the product .just the reference 
how it gone look like.where i get it  from?(chatgpt) for the better understanding of
schema models and remembering it.As this problem i faced during my project work
{
  "_id": "64a9f1f6d6f0b8e5d5c8a9b1",  // Auto-generated ObjectId
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "$2b$10$7zG8KQOWc2k1B6NJ3lRe5eOq1/BC2Ip/DAGnVZ8UN0ShpY7Hfw1w2", // Encrypted password
  "purchasedProducts": [
    {
      "_id": "64a9f2a2e8b3b9a6e5c8b1c3", // Auto-generated ObjectId for this entry
      "product": "64a8f0e6b6f0a8c1d5c8b7e1", // Reference to the Product collection
      "paidPrice": 500, // Price in smallest currency unit
      "dateOfPurchase": "2024-12-26T12:34:56.789Z" // ISO timestamp
    },
    {
      "_id": "64a9f3b2e8c4b9d7e6c8b2d4", // Another purchase entry
      "product": "64a8f0f7b7f0a8c1d5c8b8e2",
      "paidPrice": 1000,
      "dateOfPurchase": "2024-12-27T09:00:00.000Z"
    }
  ]
}

*/