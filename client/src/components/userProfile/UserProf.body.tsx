import {
  ChangeEvent,
  useEffect,
} from "react";
import { IFieldsToUpdate } from "../../features/api.userEndpoints";
import { openChangePassModal, openDeleteUrlModal } from "../../features/style.Slice";
import { SetState } from "../index";
import { useAppDispatch } from "../../app/hooks";

const UserProfBody = ({
  isError,
  userData,
  setUserData,
  currentUserData,
  setIsEdited,
}: {
  isError:boolean;
  userData: IFieldsToUpdate;
  setUserData: SetState<IFieldsToUpdate>;
  setIsEdited: SetState<boolean>;
  currentUserData: { currName: string; currEmail: string };
}) => {
  const dispatch=useAppDispatch()
  const { name, email } = userData;
  const { currName, currEmail } = currentUserData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    setUserData({
      ...userData,
      [inputName]: value,
    });
  };
  useEffect(() => {
    if (currName === name && currEmail === email) setIsEdited(false);
    else if (currName !== name || currEmail !== email) setIsEdited(true);
  }, [name, email]);
  return (
    <>
      <div className="data-inputs">
        <div className="detail-row">
          <label htmlFor="name">
            {currName !== name && (
              <i className="bx bx-edit" style={{ color: "rgb(95, 151, 11)" }} />
            )} Name:
            <br />
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={name}
              minLength={5}
              required
            />
          </label>
        </div>
        <div className="detail-row">
          <label htmlFor="email">
            {currEmail !== email && (
              <i className="bx bx-edit" style={{ color: "rgb(95, 151, 11)" }} />
            )} Email:
            <br />
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={email}
              minLength={5}
              required
            />
          </label>
          <p>{isError&&"* Another Account is Using this Email"}</p>
        </div>
        <div className="detail-row">
          <div className=" change-password-btn-container">
            <button onClick={(e)=>{e.stopPropagation();dispatch(openChangePassModal())}} className="change-password-btn"> Change Password</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfBody;
