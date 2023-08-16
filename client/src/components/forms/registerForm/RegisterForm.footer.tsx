import { OnBtnClickHndlr } from "../.."

const RegisterFormFooter = ({openModal}:{openModal:OnBtnClickHndlr}) => {
  return (
    <footer>
    <h1>HYPER NINJA </h1>
    <p>Anti Server-Sleeper, &nbsp;Stay UP & Running</p>
    <div className="footer-btns">
      <button onClick={openModal}>Login</button>
      <button>Learn More</button>
    </div>
  </footer>
  )
}

export default RegisterFormFooter