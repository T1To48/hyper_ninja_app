import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setUpdateUrlModal_value } from "../../features/style.Slice";
import { OnInputChange } from "../index";

import UpdateUrlModalHeader from "./UpdateUrlModal.header";
import UpdateUrlModalBody from "./updateUrlModal.body";
import "../../styles/common/modals/updateUrl.modal.css";
import "../../styles/common/loaders/updateUrlLoader.css";
import UpdateUrlModalFooter from "./UpdateUrlModal.footer";

const UpdateUrlModal = () => {
  const dispatch = useAppDispatch();
  const [[isError, error], setError] = useState([false, ""]);

  const { opened_updateUrlModal_className, updateUrl_value, updateUrl_field } =
    useAppSelector((state) => state.styleSlice);
  const handleChange = (e: OnInputChange) => {
    const { value } = e.target;
    dispatch(setUpdateUrlModal_value({ value }));
  };
  return (
    <div
      className={`update-url-modal-container ${opened_updateUrlModal_className}`}
    >
      <UpdateUrlModalHeader setError={setError} field={updateUrl_field} />
      <UpdateUrlModalBody
        field={updateUrl_field}
        value={updateUrl_value}
        onChange={handleChange}
      />
      <UpdateUrlModalFooter
        isError={isError}
        error={error}
        setError={setError}
      />
    </div>
  );
};

export default UpdateUrlModal;
