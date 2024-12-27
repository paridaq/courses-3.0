import mongoose,{Schema} from 'mongoose'


const productSchema:Schema = new Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})

export default mongoose.model('Products',productSchema)