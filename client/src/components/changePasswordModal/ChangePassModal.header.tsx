import { useAppDispatch } from "../../app/hooks";
import { closeChangePassModal } from "../../features/style.Slice";

const ChangePasswordHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <header>
      <span>Change Password</span>
      <div
        className="close"
        onClick={() => {
          dispatch(closeChangePassModal());
        }}
      >
        <i className="bx bx-x"></i>
      </div>
    </header>
  );
};

export default ChangePasswordHeader;
