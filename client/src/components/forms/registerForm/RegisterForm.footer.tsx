import { useNavigate } from "react-router-dom"
import { OnBtnClickHndlr } from "../.."

const RegisterFormFooter = ({openModal}:{openModal:OnBtnClickHndlr}) => {
  const navigate=useNavigate()
  return (
    <footer>
      <img src="/logo/Logo.svg"/>
    <h1>HYPER NINJA </h1>
    <p>Anti Server-Sleeper, &nbsp;Stay UP & Running</p>
    <div className="footer-btns">
      <button onClick={openModal}>Login</button>
      <button onClick={()=>navigate("/#body")} >Learn More</button>
    </div>
  </footer>
  )
}

export default RegisterFormFooter