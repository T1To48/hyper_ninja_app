import { Request, Response, NextFunction } from "express";
import Url, { Url as UrlObj } from "./url.model";
import asyncHandler from "express-async-handler";

export const newUrl = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    let newUrl: UrlObj = req.body;
    newUrl.status="Loading"
    const newUrlDoc = await Url.create(newUrl);
    if (!newUrlDoc)
      return res.status(404).json({
        success: false,
        data: `failed to add url ${newUrlDoc}`,
      });

    return setTimeout(()=>{
      return res.status(200).json({
        success: true,
        data: newUrlDoc,
      });
    },2000)
  }
);
export const getUrls=asyncHandler(async(req:Request, res: Response, next:NextFunction):Promise<any>=>{
  const {userId}=req.body
  const urlsArray=await Url.find({userId});
  if(urlsArray.length<1)return res.status(204).json({
    success: false,
    data: `The list is Empty!`
  });
  res.status(200).json({
    success:true,
    data:urlsArray
  })
})
export const getUrlById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { id } = req.params ;
  // const {userId}=req.body
    const urlDoc = await Url.findById(id);
    if (!urlDoc)
      return res.status(404).json({
        success: false,
        data: `failed to find url with id: ${id}`,
      });
    return res.status(200).json({
      success: true,
      data: urlDoc,
    });
  }
);
type ToUpdateProps = "name" | "url" | "status";
type urlUpdateProps = {
  [key in ToUpdateProps]: string;
};
export const updateUrlById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { id } = req.params;
    const newUrlDetails: urlUpdateProps = req.body as urlUpdateProps;
    const updatedUrlDoc = await Url.findByIdAndUpdate(id, newUrlDetails, {
      runValidators: true,
      new: true,
    });
    if (!updatedUrlDoc)
      return res.status(404).json({
        success: false,
        data: `failed to update url with id: ${id}`,
      });

    return res.status(200).json({
      success: true,
      data: updatedUrlDoc,
    });
  }
);
export const deleteUrlById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { id } = req.params;
    const deletedUrlDoc = await Url.findByIdAndDelete(id);
    if (!deletedUrlDoc)
      return res.status(404).json({
        success: false,
        data: `failed to delete url with id: ${id}`,
      });
    return res.status(200).json({
      success: true,
      data: deletedUrlDoc,
    });
  }
);
