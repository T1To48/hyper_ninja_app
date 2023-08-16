import { Request, Response, NextFunction } from "express";
import Url, { Url as UrlObj, UrlDoc, UrlStatus } from "./url.model";
import asyncHandler from "express-async-handler";

//reviving function that:
//1. fetch the desired url
//2. if response.success => status "on"
//3. if !response.success => status "Error" & error:"the error message"
//4.
//  I.timeout (On login ONLY) = 10 seconds => after that timeout that revives after 30 seconds
//  II.timeout default = 10 seconds  [if timeout==true => send again in 30 seconds];
// OR dummy fetch request for each url on login and then do the right aproach just to activate for first time on login

//5. interval every 14  min to revive the server

interface ReviveUrlRes {
  success: boolean;
  data?: any;
}
interface StatusUpdate {
  status: UrlStatus;
  error: any;
}
const reviveUrl = async (url: string): Promise<StatusUpdate> => {
  const timeout_duration = 10 * 1000; //seconds *1000
  const timeoutPromise = new Promise<ReviveUrlRes>((resolve, reject) => {
    setTimeout(
      () => resolve({ success: false, data: "timeout" }),
      timeout_duration
    );
  });
  try {
    const response = await Promise.race<ReviveUrlRes>([
      (await fetch(url)).json(),
      timeoutPromise,
    ]);
    const { success, data } = response;

    if (success) return { status: "On", error: false };
    else if (!success && data === "timeout")
      return { status: "Loading", error: "timeout" };
    else if (!success && data === "endpoint doesn't exist")
      return { status: "Error", error: data };
    else
      throw new Error(
        `something went wrong in: reviveUrl function, while reviving ${url}`
      );
  } catch (err) {
    // (err);
    return {
      status: "Error",
      error: err,
    };
  }
};
const updateUrlStatusById = async (urlId: string, toUpdate: StatusUpdate) => {
  const update_settings = { runValidators: true, new: true };
  const updatedDoc = await Url.findByIdAndUpdate(
    urlId,
    toUpdate,
    update_settings
  );
  if (updatedDoc?.status !== toUpdate.status)
    return console.error(`failed updating the url document with id  ${urlId} `);
  return updatedDoc;
};

export const reviveById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { url_id } = req.params;
    const urlDoc = (await Url.findById(url_id)) as UrlObj;
    if (!urlDoc)
      return res.status(404).json({
        success: false,
        data: `failed to find url with id: ${url_id}`,
      });
    if (urlDoc.status === "Off")
      return res.status(400).json({
        success: false,
        data: "turned off urls cannot be revived",
      });
    const { url } = urlDoc;
    const toUpdate = await reviveUrl(url);
    const updatedDoc = await updateUrlStatusById(url_id, toUpdate);

    if (!updatedDoc) return console.error("error in the updated Doc");
    return res.status(200).json({
      success: true,
      data: updatedDoc,
    });
  }
);

export const quickReviveAll = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req.body;
    const UrlDocs = await Url.find({ userId });
    if (!UrlDocs) {
      res.status(404).json({
        success: false,
        data: "No Urls were found with user id ${userId} ",
      });
      return;
    }
    await Promise.all([
      UrlDocs.forEach(async (urlDoc) => {
        const { url, status, id } = urlDoc;
        if (status !== "Off") {
          let newStatus = "Loading";
          try {
            const serverRes = await fetch(url);
            const toJson: ReviveUrlRes = await serverRes.json();

            if (toJson?.success) {
              newStatus = "On";
            }

            await Url.findByIdAndUpdate(
              id,
              { status: newStatus },
              { runValidators: true }
            );
          } catch {}
        }
      }),
    ]);
    res.status(200).json({
      success: true,
      data: "fetch_on_login_success",
    });
  }
);

// interface RevivingRes{
// success:boolean,
// data?:any;
// }
// export const reviveUrlsArr=asyncHandler(async(req:Request, res:Response, next:NextFunction)=>{
//     const {urlsArr}=req.body;// array of ids

//     const revivingResult=await urlsArr.map(async(urlId:string)=>{
//         const {url}=await Url.findById(urlId);

//         try{
//            const response=await fetch(url);
//            const resToJSON=await response.json() as RevivingRes;
//             if(response !==undefined && resToJSON.success){
//                 const currentStatus={status:"On"}
//                 const UrlDoc= await Url.findByIdAndUpdate(urlId,currentStatus,{runValidators:true,new:true}).select("id status")
//                 const {status}=UrlDoc
//                 const isOn=status==="On"?UrlDoc:console.log(status);
//                 return isOn
//             }
//         }catch (err){
//             const error=err as Error
//             const currentStatus={status:"Error",error:error}
//             console.error(error)
//             const UrlDoc= await Url.findByIdAndUpdate(urlId,currentStatus,{runValidators:true,new:true}).select("id status error")
//            const {status}=UrlDoc
//             const isError=status==="Error"?UrlDoc:console.log(error);
//             return isError
//         }

//     })
//     if(urlsArr.length===revivingResult.length){
//         res.status(200).json({
//             success:true,
//             data:revivingResult
//         })
//     }else {
//         res.status(404).json({
//             success:false,
//             data:revivingResult
//         })
//     }
// })

// export const revive_UrlsArr_func=async(urlsArr:UrlDoc[])=>{
//     await Promise.all(urlsArr.map(async(urlObj:UrlDoc)=>{const {id,url,status}=urlObj;
//     if(status!=="Pending"){
// try{
//     const response =await fetch(url);
//     const res_ToJSON=await response.json() as RevivingRes;
//     if(response !==undefined && res_ToJSON.success){
//         const currentStatus={status:"On"}
//         const urlDoc= await Url.findByIdAndUpdate(id,currentStatus,{runValidators:true,new:true}).select("id status")
//         const {status}=urlDoc
//         if(status!=="On")throw new Error("failed to update status in db to ON")

//     }else if(response !==undefined && !res_ToJSON.success)throw new Error(JSON.stringify(res_ToJSON))

// }catch(err){
//     const error=err as Error
//             const currentStatus={status:"Error",error:error}
//             const urlDoc= await Url.findByIdAndUpdate(id,currentStatus,{runValidators:true,new:true}).select("id status error")
//             const {status}=urlDoc
//             console.error(urlDoc)
// if(status!=="Error")throw new Error("failed to update status in db to Error")

//   }}
// }))
// }
