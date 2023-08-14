import { sign } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { Request,Response,NextFunction } from "express";
import { JWT_SECRET, SALT_ROUNDS } from "../index" 
import User from "./user.model";

export const genToken = (id: string):string =>
  sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });

  export const checkTokenCookie=asyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    res.status(200).json({
      success:true,
      data:"valid token"
    })
  })
  export const changePassword=asyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    const {userId,newPassword}=req.body;
    const password=await bcrypt.hash(newPassword,SALT_ROUNDS)
    
    const updatedUserDoc=await User.findByIdAndUpdate(userId,{password},{runValidators:true,new:true})
    if(!updatedUserDoc||updatedUserDoc.password!==password) {
      res.status(200).json({
       success:false,
       data:"failed updating password!" 
      })
      return;
    } 
res.status(200).json({
  success:true,
  data:"password updated successfully"
})
  })