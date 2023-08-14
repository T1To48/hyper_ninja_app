import { Dispatch, SetStateAction, useState } from 'react'
import { useDeleteUrlByIdMutation } from '../../features/api.slice';

import { useAppDispatch } from '../../app/hooks';
import { closeDeleteUrlModal } from '../../features/style.Slice';
import { useNavigate } from 'react-router-dom';

const DeleteFooter = ({
    urlId,
    ui_isError,
    ui_error,
    setError
  }: {
    urlId:string;
    ui_isError: boolean;
    ui_error: string;
    setError: Dispatch<SetStateAction<[boolean, string]>>;
  }) => {
    const navigate=useNavigate()
    const dispatch=useAppDispatch()
    const [isError,setIsError]=useState(false)
    const[deleteUrlById,{isLoading}]=useDeleteUrlByIdMutation()
const deleteUrl=async():Promise<void>=>{
try{
    const deletedUrlObj=await deleteUrlById(urlId).unwrap();
    const {success}=deletedUrlObj
    if(success){
      navigate("/user-area")
      dispatch(closeDeleteUrlModal())
    }

else throw new Error(JSON.stringify(deletedUrlObj))
}catch(err){
  console.log(err)
  setIsError(true)
}
}
  return (
    <div className="footer">
      {/* <p> &nbsp; {ui_isError && ui_error}</p> */}
      <p> &nbsp; {isError && "* Failed To Delete, Please Try Again Later.. "}</p>
      <div className="footer-btns-container">
        {isLoading ? (
          <div className="updateUrl-loader-container"><span className="updateUrl-loader" /></div>
        ) : (
          <>
            <button
              onClick={() => void deleteUrl()}
              className="delete-btn"
              disabled={ui_isError}
            >
              Delete
            </button>
            <button
              onClick={() => {
                dispatch(closeDeleteUrlModal());
                setError([true, ""]);
              }}
              className="cancel-delete-btn"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default DeleteFooter