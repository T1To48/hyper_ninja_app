import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User, { IUser, IUserDoc } from "./user.model";
import { IFieldsToUpdate, IUserLogin } from "./user.interfaces";
import { genToken } from "./user.services";
import { SALT_ROUNDS } from "../index";
import Url from "../url/url.model";

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let newUserObj: IUser = req.body;
    const { password } = newUserObj;
    // const SALT_ROUNDS = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    newUserObj.password = hashedPassword;
    const newUserDoc: IUserDoc = await User.create(newUserObj);
    if (!newUserDoc) {
      res.status(400).json({
        success: false,
        data: newUserDoc,
      });
      return ;
      // return next(new Error("Bad request: Invalid user data"));
    }
    const { id, name, email } = newUserDoc;
    const token = genToken(id);
   
    const newUserDocRes = {
      id,
      name,
      email,
    };

    res
      .status(200)
      .cookie("token", token, { httpOnly: true, secure: true,sameSite:"none" })
      .json({ success: true, data: newUserDocRes });
  }
);

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password }: IUserLogin = req.body;
    let userDoc: IUserDoc = await User.findOne({ email: email });
    if (!userDoc) {
      res.status(400).json({
        success: false,
        data: `Bad request: Invalid Email : ${email}`,
      });
      return;
      // return next(new Error(`Bad request: Invalid Email : ${email}`));
    }

    const { id,name:docName,email:docEmail, password: docPassword } = userDoc;
    const isPasswordCorrect = await bcrypt.compare(password, docPassword);
    if (!isPasswordCorrect) {
      res.status(401).json({
        success: false,
        data: `Bad request: Wrong Password! ${password}`,
      });
      return ;
      // return next(new Error(`Bad request: Wrong Password! ${password}`));
    }
    const token: string = genToken(id);
    userDoc.password = "*".repeat(password.length);
    const userDocRes={id,name:docName,email:docEmail};
    // res.status(200).json({
    //   success: true,
    //   data: [userDoc,token],
    // });
    res
      .status(200)
      .cookie("token", token, { httpOnly: true, secure: true,sameSite:"none"  })
      .json({ success: true, data: userDocRes });
  }
);
export const logout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    res
      .status(200)
      .cookie("token", "deleted", {
        httpOnly: true,
        secure: true,
        sameSite:"none" ,
        expires: new Date(234),
      })
      .json({ success: true, data: "token deleted successfully" });
  }
);
export const getUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    const userDoc: IUserDoc = await User.findById(userId).select("name email");
    if (!userDoc) {
      res.status(400).json({
        success: false,
        data: `Bad request: Invalid Id ${userId}`,
      });
      return;
      // return next(new Error("Bad request: User Not Found"));
    }
    res.status(200).json({
      success: true,
      data: userDoc,
    });
  }
);

export const updateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    const toUpdate: IFieldsToUpdate = req.body.toUpdate;
    const updatedUserDoc: IUserDoc = await User.findByIdAndUpdate(
      userId,
      toUpdate,
      { runValidators: true, new: true }
    );
    if (!updatedUserDoc) {
      res.status(400).json({
        success: false,
        data: updatedUserDoc,
      });
      return;
      // return next(new Error(`Bad request: Invalid userId ${userId}`));
    }
    res.status(200).json({
      success: true,
      data: updatedUserDoc,
    });
  }
);

export const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;

    const deletedUserDoc = await User.findByIdAndDelete(userId);
    
    if (!deletedUserDoc) {
      res.status(200).json({
        success: false,
        data: deletedUserDoc,
      });
      return ;
      // return next(
      //   new Error(`Bad request: failed deleting user's Doc ${userId}`)
      // );
    }
    const deletedUserServers = await Url.deleteMany({ userId:userId });
    if (!deletedUserServers) {
      res.status(200).json({
        success: false,
        data: deletedUserServers,
      });
      return;
      // return next(
      //   new Error(`Bad request: failed deleting user's servers' ${userId}`)
      // );
    }
    res.status(200).cookie("token", "deleted", {
      httpOnly: true,
      secure: true,
      expires: new Date(234),
    }).json({
      success: true,
      data: deletedUserDoc,
    });
  }
);
