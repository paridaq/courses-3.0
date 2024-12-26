import mongoose,{Schema} from 'mongoose'


const productSchema:Schema = new Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }

})

export default mongoose.model('Products',productSchema)