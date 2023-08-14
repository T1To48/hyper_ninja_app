import { useAppDispatch } from "../../../app/hooks"
import { closeLoginModal } from "../../../features/style.Slice"

const LoginHeader = () => {
  const dispatch=useAppDispatch()
  return (
     <header>
            <span>Login</span>
            <div className="close" onClick={()=>dispatch(closeLoginModal())}><i className="bx bx-x"></i></div>
        </header>
  )
}

export default LoginHeader