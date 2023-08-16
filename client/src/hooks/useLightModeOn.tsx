import { useEffect } from "react"
import { useAppDispatch } from "../app/hooks"
import { lightModeON } from "../features/style.Slice"

export const useLightModeOn=()=>{
    const dispatch=useAppDispatch()
    useEffect(()=>{
dispatch(lightModeON())
    },[])
}