import {ChangeEvent, Dispatch,SetStateAction} from 'react'
import { useAppSelector,useAppDispatch } from '../../app/hooks'
import { setDeleteUrlModal_name } from '../../features/style.Slice';

const DeleteBody = ({urlName,setError}:{urlName:string,setError:Dispatch<SetStateAction<[boolean,string]>>}) => {
 const dispatch=useAppDispatch();
  const{deleteUrl_name}=useAppSelector(state=>state.styleSlice)
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target
        dispatch(setDeleteUrlModal_name({value}))
    if(value===urlName) setError([false,""])
     if(value!==urlName) setError([true,""])
    }
  return (
    <div className="body">
        <label htmlFor='urlName'>To Delete <b>{urlName}</b>,<br/> Type the Server's Name to Confirm:</label>
        <input id="urlName" name={"urlName"} type="text" onChange={handleChange} value={deleteUrl_name} />
        
    </div>
  )
}

export default DeleteBody