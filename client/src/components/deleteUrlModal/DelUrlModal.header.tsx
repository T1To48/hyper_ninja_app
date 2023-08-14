import { useAppDispatch } from '../../app/hooks';
import { closeDeleteUrlModal } from '../../features/style.Slice';
import { SetState } from '../index';

const DeleteHeader = ({setError}:{setError:SetState<boolean>}) => {
    const dispatch=useAppDispatch()
    
  return (
    <header>
    <span>Delete URL</span>
    <div className="close" onClick={()=>{dispatch(closeDeleteUrlModal());setError(true)}}><i className="bx bx-x"></i></div>
</header>
      
  )
}

export default DeleteHeader;