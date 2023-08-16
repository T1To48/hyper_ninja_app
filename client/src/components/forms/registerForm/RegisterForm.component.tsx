import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import RegisterFormHeader from "./RegisterForm.header";
import { IUserRegisterReq, OnBtnClickHndlr, OnInputChange } from "../../index";
import RegisterFormFooter from "./RegisterForm.footer";
import { openLoginModal } from "../../../features/style.Slice";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [newUserObj, setNewUserObj] = useState<IUserRegisterReq>({
    name: "",
    email: "",
    password: "",
  });
  const { isOpen_loginModal } = useAppSelector((state) => state.styleSlice);
  const handleChange = (e: OnInputChange) => {
    const { name, value } = e.target;
    setNewUserObj({
      ...newUserObj,
      [name]: value,
    });
  };
  const handleOpenModal: OnBtnClickHndlr = () => dispatch(openLoginModal());
  return (
    <div className="register-component flex">
      <RegisterFormHeader
        newUserObj={newUserObj}
        openModal={handleOpenModal}
        onChange={handleChange}
      />
      <RegisterFormFooter openModal={handleOpenModal} />
      {isOpen_loginModal && <div className="modal-bg" />}
    </div>
  );
};

export default RegisterForm;
