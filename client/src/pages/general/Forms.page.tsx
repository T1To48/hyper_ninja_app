import "../../styles/forms/registerForm.css";
import { RegisterForm,LoginForm } from "../../components/index";
import { useLightModeOn } from "../../hooks/useLightModeOn";
import useCheckCookieAndRedirect from "../../hooks/useCheckCookieAndRedirect";
const Forms = () => {
 useLightModeOn()
 useCheckCookieAndRedirect("/user-area")
  return (
    <div className="register-container flex">
      <RegisterForm />
      <LoginForm />
    </div>
  );
};
export default Forms;

// const { name, email, password } = newUserObj;

//  <input
//   name="name"
//   onChange={onChange}
//   value={name}
//   type="text"
//   placeholder="name"
// />
// <input
//   name="email"
//   onChange={onChange}
//   value={email}
//   type="email"
//   placeholder="email"
// />
// <input
//   name="password"
//   onChange={onChange}
//   value={password}
//   type="password"
//   placeholder="password"
// />
