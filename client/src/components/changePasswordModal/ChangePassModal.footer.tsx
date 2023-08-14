import {closeChangePassModal} from "../../features/style.Slice";
import { useAppDispatch } from "../../app/hooks";
import { SetState } from "../index";
import { IChangePasswordReq } from "../../features/api.userEndpoints";
import { PasswordObj } from "./ChangePassModal.component";

const ChangePassFooter = ({
  isLoading,
  isError,
  error,
  // setError,
  // setPasswords
}: {
  isLoading: boolean;
  isError: boolean;
  error: string;
  // setError:SetState<[boolean,string]>;
  // setPasswords:SetState<IChangePasswordReq>
}) => {
  const dispatch=useAppDispatch()
  return (
    <div className="footer">
      <p> &nbsp; {isError && error}</p>
      <div className="footer-btns-container">
        {isLoading ? (
          <div className="updateUrl-loader-container">
            <span className="updateUrl-loader" />
          </div>
        ) : (
          <>
            <button
              type="submit"
              className="confirm-btn"
               disabled={isLoading}
            >
              Confirm
            </button>
            <button
              onClick={() => {
                dispatch(closeChangePassModal());
                // setError([false,""])
                // setPasswords(PasswordObj)
              }}
              type="button"
              className="cancel-delete-btn"
              disabled={isLoading}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ChangePassFooter;
