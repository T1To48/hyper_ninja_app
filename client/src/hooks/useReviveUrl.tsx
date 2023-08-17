import { useReviveUrlByIdMutation } from "../features/api.slice"
const half_minute=30_0000;
export const useReviveUrl=()=>{
    const [reviveUrlById]=useReviveUrlByIdMutation()
    const reviveUrl=async(urlId:string)=>{
        try{
            const reviveUrlRes=await reviveUrlById(urlId).unwrap()
            const {status,error}=reviveUrlRes.data
            if (reviveUrlRes.success && status==="Loading" && error==="timeout"){
                setTimeout(()=>{
                    void reviveUrlById(urlId)
                },half_minute)
            }
        }catch(err){
            console.log("error in userReviveUrl",err)
        }
    }
    return [reviveUrl] as const
}