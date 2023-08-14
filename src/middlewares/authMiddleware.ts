import { JwtPayload, verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { JWT_SECRET } from "../utils/constants";
interface IDecodedToken {
  id: string;
  iat: number;
  exp: number;
}

export const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let {token} = req.cookies || false;
    if (!token||token.length<10) {
      const errMsg = "token is missing";
      res.status(201).json({
        success: false,
        data: errMsg,
      });
      return;
      //  next(new Error(errMsg));
    }

    // token = token.split(" ")[1];
    const decodedToken = verify(token, JWT_SECRET) as IDecodedToken;
    if(!decodedToken.id) {
        const errMsg = "Invalid Token";
        res.status(201).json({
          success: false,
          data: errMsg,
        });
        return;
        //  next(new Error(errMsg));
      }
      req.body.userId=decodedToken.id
    next();
  }
);
