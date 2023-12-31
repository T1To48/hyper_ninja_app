import { useEffect, useState } from "react";
import "../../styles/common/modals/changePassword.modal.css";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ChangePasswordHeader from "./ChangePassModal.header";
import ChangePassBody from "./ChangePassModal.body";
import ChangePassFooter from "./ChangePassModal.footer";
import {
  useChangePasswordMutation,
} from "../../features/api.userEndpoints";
import { IChangePasswordReq, OnFormSubmit } from "../index";
import { closeChangePassModal } from "../../features/style.Slice";

export const PasswordObj: IChangePasswordReq = {
  password: "",
  newPassword: "",
};
const ChangePassModal = () => {
  const dispatch = useAppDispatch();
  const [passwords, setPasswords] = useState<IChangePasswordReq>(PasswordObj);
  const [[isError, error], setError] = useState([false, ""]);
  const [isChanged, setIsChanged] = useState(false);
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const { isOpen_changePassModal, opened_changePassModal_className } =
    useAppSelector((state) => state.styleSlice);
  const saveNewPassword = async (
    e:OnFormSubmit
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await changePassword(passwords).unwrap();

      if (
        response.success &&
        response.data === "password updated successfully"
      ) {
        setIsChanged(true);
        setTimeout(() => {
          dispatch(closeChangePassModal());
        }, 1500);
        return;
      }
      if (response.data && !response.success) {
        return setError([true, "The Typed Current Password Is Invalid"]);
      }

      throw new Error(JSON.stringify(response));
    } catch (err) {
      return setError([true, "Unknow Error , Try Again Later"]);
    }
  };
  useEffect(() => {
    if (!isOpen_changePassModal) {
      setError([false, ""]);
      setPasswords(PasswordObj);
      setTimeout(()=>{
        setIsChanged(false);
      },700)
    }
  }, [isOpen_changePassModal]);
  
  return (
    <div
      className={`change-password-modal-container ${opened_changePassModal_className}`}
    >
      {isChanged ? (< div className="success-password-change">
        <i className='bx bx-check-circle'/>
        <div>Password Changed Successfully!</div>
      </div>
      ) : (
        <>
          <ChangePasswordHeader
          />
          <form onSubmit={(e) => void saveNewPassword(e)}>
            <ChangePassBody passwords={passwords} setPasswords={setPasswords} />

            <ChangePassFooter
              isLoading={isLoading}
              error={error}
              isError={isError}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default ChangePassModal;
