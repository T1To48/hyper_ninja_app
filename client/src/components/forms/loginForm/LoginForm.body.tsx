import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserLoginReq, OnInputChange, OnFormSubmit } from "../../index";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useLoginMutation } from "../../../features/api.userEndpoints";
import { closeLoginModal } from "../../../features/style.Slice";

const LoginBody = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { isOpen_loginModal } = useAppSelector((state) => state.styleSlice);
  const [[isError, error], setError] = useState([false, ""]);
  const [loginData, setLoginData] = useState<IUserLoginReq>({
    email: "",
    password: "",
  });
  const { email, password } = loginData;
  const handleChange = (e: OnInputChange) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const loginUser = async (e: OnFormSubmit) => {
    e.preventDefault();
    try {
      const isLogged = await login(loginData).unwrap();
      if (isLogged?.success) {
        navigate("/user-area");
        dispatch(closeLoginModal());
      } else throw new Error(JSON.stringify(isLogged));
    } catch (err) {
      setError([true, "Invalid Email or Password"]);
    }
  };
  useEffect(() => {
    if (!isOpen_loginModal) {
      setError([false, ""]);
      setLoginData({
        email: "",
        password: "",
      });
    }
  }, [isOpen_loginModal]);

  return (
    <form onSubmit={(e) => void loginUser(e)}>
      <p> &nbsp; {isError && error}</p>
      <div className="input-row">
        {/* <label>
            Email */}
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="Email"
          required
        />
      </div>
      <div className="input-row">
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          placeholder="Password"
          required
        />
      </div>
      <div className="login-btn-container">
        {isLoading ? (
          <div className="login-btn-loader ">
            {" "}
            <span className="newUrl-loader" />
          </div>
        ) : (
          <button type="submit" id="login-btn">
            Login
          </button>
        )}
      </div>
    </form>
  );
};

export default LoginBody;
