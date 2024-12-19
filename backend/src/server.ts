import express from'express';




const app = express();


const port = 3000;

app.listen(port,()=>{
    console.log(`sewrver is running on port ${port}`)
})