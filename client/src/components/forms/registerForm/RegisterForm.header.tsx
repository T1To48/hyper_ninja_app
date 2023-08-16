import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../features/api.userEndpoints";
import {
  IUserRegisterReq,
  OnBtnClickHndlr,
  OnFormSubmit,
  OnInputChange,
} from "../../index";
type RegisterFields = "name" | "email" | "password";
const minLength = {
  name: 5,
  email: 5,
  password: 8,
};
const RegisterFormHeader = ({
  newUserObj,
  onChange,
  openModal,
}: {
  newUserObj: IUserRegisterReq;
  onChange: (e: OnInputChange) => void;
  openModal: OnBtnClickHndlr;
}) => {
  const navigate = useNavigate();
  const inputNames = Object.keys(newUserObj) as RegisterFields[];
  const [register] = useRegisterMutation();
  const [isError, setIsError] = useState(false);

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
  return (
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
          <span onClick={openModal}> Login</span>
        </p>
      </div>
    </header>
  );
};

export default RegisterFormHeader;
