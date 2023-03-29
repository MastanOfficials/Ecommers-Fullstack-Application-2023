import express from "express";
import  color  from "colors";
import dotenv from "dotenv";

//configure env
dotenv.config()

//rest object
const app=express();


//rest api
app.get('/',(req,res)=>{
    res.json.parse(
        res.send({
            messsage:"wllcome",
            secondmessage:"secondmessage",
            thisrd:"jsonvalidator"
        })
    )
    // res.send({
    //     messsage:"wllcome",
    //     secondmessage:"secondmessage"
    // })
})

//port
const PORT=process.env.PORT

//run listen
app.listen(PORT,()=>{
    console.log(`server running port${PORT}`.bgBlue)
})