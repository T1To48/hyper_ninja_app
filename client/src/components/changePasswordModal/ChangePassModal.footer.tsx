import { closeChangePassModal } from "../../features/style.Slice";
import { useAppDispatch } from "../../app/hooks";

const ChangePassFooter = ({
  isLoading,
  isError,
  error,
}: {
  isLoading: boolean;
  isError: boolean;
  error: string;
}) => {
  const dispatch = useAppDispatch();
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
            <button type="submit" className="confirm-btn" disabled={isLoading}>
              Confirm
            </button>
            <button
              onClick={() => {
                dispatch(closeChangePassModal());
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
