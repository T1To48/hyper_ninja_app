import { useParams } from "react-router-dom";
import { SetState } from "../index";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  useUpdateUrlByIdMutation,
} from "../../features/api.slice";
import { closeUpdateUrlModal } from "../../features/style.Slice";
import { useReviveUrl } from "../../hooks/useReviveUrl";

const UpdateUrlModalFooter = ({
  isError,
  error,
  setError,
}: {
  isError: boolean;
  error: string;
  setError: SetState<[boolean, string]>;
}) => {
  const dispatch = useAppDispatch();
  const { urlId: id } = useParams();
  const [updateUrlById, { isLoading }] = useUpdateUrlByIdMutation();
  const [reviveUrl] = useReviveUrl();
  const { updateUrl_field, updateUrl_value } = useAppSelector(
    (state) => state.styleSlice
  );

  const updateField = async (): Promise<void> => {
    if (!id) return console.error("!!!!url id missing in params!!!!!");
    if (updateUrl_value.length < 1)
      return setError([true, `* ${updateUrl_field} Field is EMPTY!`]);
    try {
      const field = updateUrl_field.toLowerCase();
      const updatedUrlObj = await updateUrlById({
        id,
        data: { [field]: updateUrl_value },
      }).unwrap();
      const { success } = updatedUrlObj;
      if (success) {
        dispatch(closeUpdateUrlModal());
        if (field === "url") void reviveUrl(id);
      } else throw new Error(JSON.stringify(updatedUrlObj));
    } catch (err) {
      setError([true, `* ${updateUrl_field} already Exists`]);
    }
  };

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
              onClick={() => void updateField()}
              className="save-update-btn"
            >
              Save
            </button>
            <button
              onClick={() => {
                dispatch(closeUpdateUrlModal());
                setError([false, ""]);
              }}
              className="cancel-update-btn"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateUrlModalFooter;
