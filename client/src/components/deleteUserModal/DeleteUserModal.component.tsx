import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { useDeleteUserMutation } from "../../features/api.userEndpoints";
import { IUserPassword, OnFormSubmit } from "../index";
import "../../styles/common/modals/changePassword.modal.css";

import DeleteUserHeader from "./DeleteUserModal.header";
import DeleteUserBody from "./DeleteUserModal.body";
import DeleteUserFooter from "./DeleteUserModal.footer";

const DeleteUserModal = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<IUserPassword>("");
  const [[isError, error], setError] = useState([false, ""]);
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const { isOpen_deleteUserModal, opened_deleteUserModal_className } =
    useAppSelector((state) => state.styleSlice);
  const deleteUserAccount = async (
    e: OnFormSubmit
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await deleteUser(password).unwrap();
      console.log("delete response", response);
      if (response.success && response.data) {
        navigate("/register");

        return;
      }
      if (response.data && !response.success) {
        return setError([true, "* Wrong Password"]);
      }
      throw new Error(JSON.stringify(response));
    } catch (err) {
      return setError([true, "Unknown Error , Try Again Later"]);
    }
  };
  useEffect(() => {
    if (!isOpen_deleteUserModal) {
      setError([false, ""]);
      setPassword("");
    }
  }, [isOpen_deleteUserModal]);

  return (
    <div
      className={`change-password-modal-container ${opened_deleteUserModal_className}`}
    >
      <DeleteUserHeader
      />
      <form onSubmit={(e) => void deleteUserAccount(e)}>
        <DeleteUserBody password={password} setPassword={setPassword} />

        <DeleteUserFooter
          isLoading={isLoading}
          error={error}
          isError={isError}
        />
      </form>
    </div>
  );
};

export default DeleteUserModal;
