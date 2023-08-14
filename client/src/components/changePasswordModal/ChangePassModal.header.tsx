import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../app/hooks";
import { closeChangePassModal } from "../../features/style.Slice";
import { SetState } from "../index";
import { IChangePasswordReq } from "../../features/api.userEndpoints";
import { PasswordObj } from "./ChangePassModal.component";

const ChangePasswordHeader = (
//   {
//   setError,
//   setPasswords
// }: {
//   setError: SetState<[boolean, string]>;
//   setPasswords:SetState<IChangePasswordReq>
// }
) => {
  const dispatch = useAppDispatch();

  return (
    <header>
      <span>Change Password</span>
      <div
        className="close"
        onClick={() => {
          dispatch(closeChangePassModal());
          // setError([false, ""]);
          // setPasswords(PasswordObj)
        }}
      >
        <i className="bx bx-x"></i>
      </div>
    </header>
  );
};

export default ChangePasswordHeader;
