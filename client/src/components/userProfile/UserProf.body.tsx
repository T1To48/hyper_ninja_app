import { useEffect } from "react";
import { IFieldsToUpdate, OnInputChange, SetState } from "../index";
import { openChangePassModal } from "../../features/style.Slice";
import { useAppDispatch } from "../../app/hooks";
import { OnBtnClick } from "../index";
const UserProfBody = ({
  isError,
  userData,
  setUserData,
  currentUserData,
  setIsEdited,
}: {
  isError: boolean;
  userData: IFieldsToUpdate;
  setUserData: SetState<IFieldsToUpdate>;
  setIsEdited: SetState<boolean>;
  currentUserData: { currName: string; currEmail: string };
}) => {
  const dispatch = useAppDispatch();
  const { name, email } = userData;
  const { currName, currEmail } = currentUserData;

  const handleChange = (e: OnInputChange) => {
    const { name: inputName, value } = e.target;
    setUserData({
      ...userData,
      [inputName]: value,
    });
  };
  const handleOpenModal=(e:OnBtnClick)=>{
    e.stopPropagation()
    dispatch(openChangePassModal());
  }
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
            )}{" "}
            Name:
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
            )}{" "}
            Email:
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
          <p>{isError && "* Another Account is Using this Email"}</p>
        </div>
        <div className="detail-row">
          <div className=" change-password-btn-container">
            <button
            type="button"
              onClick={handleOpenModal}
              className="change-password-btn"
            >
              {" "}
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfBody;
