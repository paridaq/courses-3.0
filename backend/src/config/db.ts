import mongoose from 'mongoose';
import dotenv from 'dotenv'



//.env file should be same level as package.json means 
// in this project i continuely put the .env file in the src folder but it should be put in the backend folder
// otherwise it doesn't works


const connectDb = async()=>{
    try {
        // the mongo_uri should be string
        const conn = await mongoose.connect(process.env.MONGO_URI as string || 'mongodb+srv://biswajit:biswajit1234@cluster0.xxscw.mongodb.net/' )
//i know ishared the mongodb uri it should be in the.env
        console.log(`Connected to mongoDb database ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        
    }

}
export default connectDb