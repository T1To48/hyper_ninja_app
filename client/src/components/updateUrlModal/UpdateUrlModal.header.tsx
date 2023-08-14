import { useAppDispatch } from "../../app/hooks";
import { closeUpdateUrlModal } from "../../features/style.Slice";
import { SetState } from "../index";

const UpdateUrlModalHeader = ({
  field,
  setError,
}: {
  field: string;
  setError: SetState<[boolean, string]>;
}) => {
  const dispatch = useAppDispatch();
  return (
    <header>
      <span>Edit Server's {field}</span>
      <div
        className="close"
        onClick={() => {
          dispatch(closeUpdateUrlModal());
          setError([false, ""]);
        }}
      >
        <i className="bx bx-x"/>
      </div>
    </header>
  );
};

export default UpdateUrlModalHeader;
