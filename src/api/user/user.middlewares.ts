import bcrypt from "bcrypt"
import User from "./user.model"
import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";

export const checkPassword=asyncHandler(async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
        const {userId,password:typedPassword}=req.body 
        const user=await User.findById(userId).select("password");
        const isCorrect=await bcrypt.compare(typedPassword,user.password)
        if(isCorrect)return next();
else {
 const errMsg = "Wrong Password";
    res.status(200).json({
        success: false,
        data: errMsg,
      });
      return;
}
   
})
