import {useEffect, useState } from "react";
import UserProfHeader from "./UserProf.header";
import UserProfBody from "./UserProf.body";
import UserProfFooter from "./UserProf.footer";
import {
  useGetUserDataQuery,
  useUpdateUserDataMutation,
} from "../../features/api.userEndpoints";
import {
  closeChangePassModal,
  closeDeleteUserModal,
} from "../../features/style.Slice";
import ChangePassModal from "../changePasswordModal/ChangePassModal.component";
import DeleteUserModal from "../deleteUserModal/DeleteUserModal.component";
import { useAppDispatch } from "../../app/hooks";
import { IFieldsToUpdate, OnFormSubmit } from "../index";
const UserProfile = () => {
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useGetUserDataQuery();
  const [updateUserData] = useUpdateUserDataMutation();
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState<IFieldsToUpdate>({
    name: "",
    email: "",
  });

  const saveChanges = async (e: OnFormSubmit): Promise<void> => {
    e.preventDefault();
    if (!data?.data) return;
    try {
      const updatedUserDoc = await updateUserData(userData).unwrap();

      if (updatedUserDoc.success) {
        setIsEdited(false);
        setIsError(false);
        return;
      }
      if (!updatedUserDoc || !updatedUserDoc.success)
        throw new Error(JSON.stringify(updatedUserDoc));
    } catch (err) {
      setIsError(true);
    }
  };

  const cancelChanges = () => {
    if (!data?.data) return;
    const { name, email } = data.data;

    setUserData({ name, email });
  };
  const closeOpenedModals = () => {
    dispatch(closeChangePassModal());
    dispatch(closeDeleteUserModal());
  };
  useEffect(() => {
    if (isSuccess) {
      const { name, email } = data.data;
      setUserData({ ...userData, name, email });
    }
  }, [isSuccess]);

  if (isSuccess)
    return (
      <>
        <ChangePassModal />
        <DeleteUserModal />
        <div className="user-profile-container" onClick={closeOpenedModals}>
          <form onSubmit={(e) => void saveChanges(e)}>
            <div className="user-profile-wrapper">
              <UserProfHeader />
              <UserProfBody
                isError={isError}
                userData={userData}
                setUserData={setUserData}
                setIsEdited={setIsEdited}
                currentUserData={{
                  currName: data.data.name,
                  currEmail: data.data.email,
                }}
              />
              <UserProfFooter
                isEdited={isEdited}
                cancelChanges={cancelChanges}
              />
            </div>
          </form>
        </div>
      </>
    );
};

export default UserProfile;
