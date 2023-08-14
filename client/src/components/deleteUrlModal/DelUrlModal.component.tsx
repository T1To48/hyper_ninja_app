import {useState} from 'react'
import "../../styles/common/modals/deleteUrl.modal.css";

import DeleteHeader from './DelUrlModal.header'
import DeleteBody from './DelUrlModal.body'
import DeleteFooter from './DelUrlModal.footer'
import { useAppSelector } from '../../app/hooks';

const DeleteUrlmodal = ({urlName,urlId}:{urlName:string,urlId:string}) => {
    const [[isError,error],setError] = useState([true,""])
const {opened_deleteUrlModal_className}=useAppSelector(state=>state.styleSlice)
  return (
    <div className={`delete-url-modal-container ${opened_deleteUrlModal_className}`}>
        <DeleteHeader setError={setError} />
        <DeleteBody setError={setError} urlName={urlName}/>
        <DeleteFooter ui_isError={isError} ui_error={error} setError={setError} urlId={urlId} />
    </div>
  )
}

export default DeleteUrlmodal