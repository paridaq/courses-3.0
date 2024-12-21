import mongoose from 'mongoose';
import dotenv from 'dotenv'



//.env file should be same level as package.json means 
// in this project i continuely put the .env file in the src folder but it should be put in the backend folder
// otherwise it doesn't works

console.log( 'mongo-uri' ,process.env.MONGO_URI)
const connectDb = async()=>{
    try {
        // the mongo_uri should be string
        const conn = await mongoose.connect(process.env.MONGO_URI as string )

        console.log(`Connected to mongoDb database ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        
    }

}
export default connectDb