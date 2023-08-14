import  { Dispatch, SetStateAction } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { closeDeleteUrlModal } from '../../features/style.Slice';

const DeleteHeader = ({setError}:{setError:Dispatch<SetStateAction<[boolean,string]>>}) => {
    const dispatch=useAppDispatch()
    
  return (
    <header>
    <span>Delete URL</span>
    <div className="close" onClick={()=>{dispatch(closeDeleteUrlModal());setError([true,""])}}><i className="bx bx-x"></i></div>
</header>
      
  )
}

export default DeleteHeader;