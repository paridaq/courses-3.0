import express from'express';
import dotenv from 'dotenv'
import connectDb from './config/db';

//dotenv.config() isfunction is used to load environment variable into process.env
// this allow you to define configuration settings in a .env file

dotenv.config();
connectDb();

const app = express();


const port = 3000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})