import { useAppDispatch } from "../../app/hooks";
import { closeDeleteUserModal } from "../../features/style.Slice";

const DeleteUserHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <header>
      <span>Delete Account</span>
      <div
        className="close"
        onClick={() => {
          dispatch(closeDeleteUserModal());
        }}
      >
        <i className="bx bx-x"></i>
      </div>
    </header>
  );
};

export default DeleteUserHeader;
