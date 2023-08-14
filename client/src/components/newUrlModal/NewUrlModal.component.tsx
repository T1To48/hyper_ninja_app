import ModalBody from "./NewUrlModal.body"
import ModalHeader from "./NewUrlModal.header"
import "../../styles/common/newUrlModal.css"
import { useAppSelector } from "../../app/hooks"
export const NewUrlModal = () => {
  const {isOpen_newUrlModal,opened_newUrlModal_className}=useAppSelector(state=>state.styleSlice)

  // if (showModal) 
  return <div className={`new-url-modal-container ${opened_newUrlModal_className}`}>
    <ModalHeader />
    <ModalBody />
  </div>
}
