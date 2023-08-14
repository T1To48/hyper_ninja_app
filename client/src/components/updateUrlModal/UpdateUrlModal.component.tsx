import React, { ChangeEvent, useState } from "react";
import UpdateUrlModalHeader from "./UpdateUrlModal.header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetUrlByIdQuery } from "../../features/api.slice";
import UpdateUrlModalBody from "./updateUrlModal.body";
import "../../styles/common/modals/updateUrl.modal.css";
import "../../styles/common/loaders/updateUrlLoader.css"
import UpdateUrlModalFooter from "./UpdateUrlModal.footer";
import { setUpdateUrlModal_value } from "../../features/style.Slice";

const UpdateUrlModal = () => {
  const dispatch = useAppDispatch();
  const [[isError, error], setError] = useState([false, ""]);

  const { opened_updateUrlModal_className, updateUrl_value, updateUrl_field } =
    useAppSelector((state) => state.styleSlice);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setUpdateUrlModal_value({ value }));
    // setCurrentValue(value)
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
