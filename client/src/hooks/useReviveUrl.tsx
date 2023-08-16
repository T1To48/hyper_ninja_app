import { useReviveUrlByIdMutation } from "../features/api.slice"
const twenty_seconds=20_0000;
export const useReviveUrl=()=>{
    const [reviveUrlById]=useReviveUrlByIdMutation()
    const reviveUrl=async(urlId:string)=>{
        try{
            const reviveUrlRes=await reviveUrlById(urlId).unwrap()
            const {status,error,url}=reviveUrlRes.data
            console.log(reviveUrlRes.data)
            if (reviveUrlRes.success && status==="Loading" && error==="timeout"){
                console.log(url,"timedout")
                setTimeout(()=>{
                    console.log("setTimeout invoked after server timeDout for:")
                    void reviveUrlById(urlId)
                },twenty_seconds)
            }
        }catch(err){
            console.log("error in userReviveUrl",err)
        }
    }
    return [reviveUrl] as const
}