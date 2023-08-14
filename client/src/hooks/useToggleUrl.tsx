import React from 'react'
import { Status, useReviveUrlByIdMutation, useUpdateUrlByIdMutation } from '../features/api.slice'

const useToggleUrl = ({status,id}:{status:Status,id:string}) => {
  const [updateUrlById]=useUpdateUrlByIdMutation();
  const [reviveUrlById]=useReviveUrlByIdMutation()
  const toggleUrl=async ():Promise<void>=>{
    const newStatus:Status=status==="Off"?"Loading":"Off"
    const updateObj={
      id,data:{status:newStatus}
    }
    try{
     const updatedUrl= await updateUrlById(updateObj).unwrap();
     if(updatedUrl.success &&updatedUrl.data.status!=="Off"){
       
       void reviveUrlById(id)
     }else if(updatedUrl.success &&updatedUrl.data.status==="Off")return;
  else{
    throw new Error(JSON.stringify(updatedUrl))
  }
    }catch(err){
      console.log("error in turning on/off the url, Error==>  ",err)
    }
      
  }
    return [toggleUrl] as const
}

export default useToggleUrl