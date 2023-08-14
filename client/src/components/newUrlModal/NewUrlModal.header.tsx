import { useAppDispatch } from "../../app/hooks"
import { closeNewUrlModal } from "../../features/style.Slice"

const ModalHeader = () => {
  const dispatch=useAppDispatch()
  return (
        <header>
            <span>Add New Server</span>
            <div className="close" onClick={()=>dispatch(closeNewUrlModal())}><i className="bx bx-x"></i></div>
        </header>
  )
}

export default ModalHeader