import express from "express";
import {rigisterController} from '../controllers/authController.js';


//router object
const router=express.Router()


//Routing
//RIGISTER  || METHOD POST
router.post('rigister',rigisterController)


export default router;