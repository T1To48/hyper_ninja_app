import { useAppSelector } from "../../../app/hooks";
import "../../../styles/forms/loginForm.modal.css";
import LoginHeader from "./LoginForm.header";
import LoginBody from "./LoginForm.body";
const LoginForm = () => {
  const { opened_loginModal_className } = useAppSelector(
    (state) => state.styleSlice
  );
  return (
    <div className={`login-modal-container ${opened_loginModal_className}`}>
      <LoginHeader />
      <div className="body">
        <LoginBody />
      </div>
    </div>
  );
};

export default LoginForm;
