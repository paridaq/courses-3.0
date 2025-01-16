import express from'express';
import dotenv from 'dotenv'
import connectDb from './config/db';
import {Request,Response} from 'express'
import authRoute from './routes/authRoute'
import cors from 'cors'


//dotenv.config() isfunction is used to load environment variable into process.env
// this allow you to define configuration settings in a .env file

dotenv.config();
connectDb();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',authRoute)


const port = 8080;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})