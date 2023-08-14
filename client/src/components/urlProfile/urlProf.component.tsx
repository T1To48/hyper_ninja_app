import React, { useEffect } from 'react'
import UrlProfileHeader from './urlProf.header'
import "../../styles/urlProfile/urlProfile.css"
import UrlProfileBody from './urlProf.body'
import { useGetUrlByIdQuery } from '../../features/api.slice'
import { useNavigate, useParams } from 'react-router-dom'
import UpdateUrlModal from '../updateUrlModal/UpdateUrlModal.component'
import { useAppSelector } from '../../app/hooks'
type UrlIdParams={
  urlId:string
}
const UrlProfile = () => {
  const navigate=useNavigate()
  const {urlId}=useParams<UrlIdParams>()
  const {data:urlProfile,isError,error,isSuccess}=useGetUrlByIdQuery(urlId??"")
  const {isOpen_updateUrlModal,isOpen_deleteUrlModal,updateUrl_field,updateUrl_value}=useAppSelector(state=>state.styleSlice)
  // useEffect(()=>{console.log("updateUrl_value",updateUrl_value)},[updateUrl_value])
  if(isSuccess)

  return (
    <>
    <div className="url-profile-container home">

    <UrlProfileHeader urlProfileObj={urlProfile.data} />
    <UrlProfileBody status={urlProfile.data.status} error={urlProfile.data.error}/>
    </div>
    {isOpen_updateUrlModal&&<div className="modal-bg"/>}
    {isOpen_deleteUrlModal&&<div className="modal-bg"/>}
    <UpdateUrlModal/>
    </>
  )
}

export default UrlProfile