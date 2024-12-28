import mongoose,{Schema,Document} from 'mongoose'

interface Product extends Document{
    productName:string,
    price:number
}


const productSchema:Schema = new Schema<Product>({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})

export default mongoose.model<Product>('Product',productSchema)