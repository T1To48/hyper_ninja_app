import { useEffect, useState } from "react";
import "../../styles/forms/registerForm.css";
import { useRegisterMutation } from "../../features/api.userEndpoints";
import { useNavigate } from "react-router-dom";
import { lightModeON, openLoginModal } from "../../features/style.Slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  IUserRegisterReq,
  LoginForm,
  OnFormSubmit,
  OnInputChange,
} from "../../components/index";
type RegisterFields = "name" | "email" | "password";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isOpen_loginModal } = useAppSelector((state) => state.styleSlice);
  const [register] = useRegisterMutation();
  const [isError, setIsError] = useState(false);
  const [newUserObj, setNewUserObj] = useState<IUserRegisterReq>({
    name: "",
    email: "",
    password: "",
  });
  const inputNames = Object.keys(newUserObj) as RegisterFields[];
  const onChange = (e: OnInputChange) => {
    const { name, value } = e.target;
    setNewUserObj({
      ...newUserObj,
      [name]: value,
    });
  };
  const newUser = async (e: OnFormSubmit) => {
    e.preventDefault();
    try {
      const newUserDoc = await register(newUserObj).unwrap();
      if (newUserDoc.success) return navigate("/user-area");
      if (!newUserDoc.success) throw new Error(JSON.stringify(newUserDoc));
    } catch (err) {
      setIsError(true);
    }
  };
  const minLength = {
    name: 5,
    email: 5,
    password: 8,
  };
  useEffect(() => {
    dispatch(lightModeON());
  }, []);
  return (
    <div className="register-container flex">
      <div className="register-component flex">
        <header>
          <p className="error">{isError && "* Email Already Registered"}</p>
          <form onSubmit={(e) => void newUser(e)}>
            {inputNames.map((field) => {
              return (
                <input
                  minLength={minLength[field]}
                  className={field + "Input"}
                  key={field}
                  name={field}
                  value={newUserObj[field]}
                  type={field}
                  placeholder={field}
                  onChange={onChange}
                  required
                />
              );
            })}

            <div className="register-btn-container">
              {" "}
              <button type="submit"> Register</button>
            </div>
          </form>
          <div>
            <br />
            <p>
              Already Have An Account?{" "}
              <span onClick={() => dispatch(openLoginModal())}> Login</span>
            </p>
          </div>
        </header>
        <footer>
          <h1>HYPER NINJA </h1>
          <p>Anti Server-Sleeper, &nbsp;Stay UP & Running</p>
          <div className="footer-btns">
            <button onClick={() => dispatch(openLoginModal())}>Login</button>
            <button>Learn More</button>
          </div>
        </footer>
      </div>
      {isOpen_loginModal && <div className="modal-bg" />}
      <LoginForm />
    </div>
  );
};
export default Register;

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
