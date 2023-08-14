import { OnDivClick } from "..";
import { useAppDispatch } from "../../app/hooks";
import { openDeleteUserModal } from "../../features/style.Slice";
const UserProfHeader = () => {
  const dispatch = useAppDispatch();
const handleClick=(e:OnDivClick)=>{
  e.stopPropagation();
  dispatch(openDeleteUserModal())
}
  return (
    <div
      className="delete-user-icon"
      onClick={handleClick}
    >
      <i className="bx bx-trash" />
    </div>
  );
};

export default UserProfHeader;
