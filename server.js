import express from "express";
import  color  from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/database.js";
import authRouts from "./routes/authRoute.js";


//configure env
dotenv.config()

//database config
connectDB();

//rest object
const app=express();


//middle wae
app.use(express.json());
app.use(morgan("dev"))


//Routes
app.use('/api/v1/auth',authRouts)



//rest api
app.get('/',(req,res)=>{
    res.json.parse(
        res.send(`<h1>The Ecommers Appliaction started</h1>`)
    )
    // res.send({
    //     messsage:"wllcome",
    //     secondmessage:"secondmessage"
    // })
})

//port
const PORT=process.env.PORT || 8080

//run listen
app.listen(PORT,()=>{
    console.log(`server running port${PORT}`.bgBlue)
})