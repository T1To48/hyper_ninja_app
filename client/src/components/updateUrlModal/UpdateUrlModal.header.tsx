import { Dispatch, SetStateAction } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { closeUpdateUrlModal } from '../../features/style.Slice'

const UpdateUrlModalHeader = ({field,setError}:{field:string,setError:Dispatch<SetStateAction<[boolean,string]>>}) => {
    const dispatch=useAppDispatch()
  return (
    <header>
    <span>Edit Server's {field}</span>
    <div className="close" onClick={()=>{dispatch(closeUpdateUrlModal());setError([false,''])}}><i className="bx bx-x"></i></div>
</header>
  )
}

export default UpdateUrlModalHeader