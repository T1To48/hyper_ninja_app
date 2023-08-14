import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  useNewUrlMutation,
  useReviveUrlByIdMutation,
} from "../../features/api.slice";
import { closeNewUrlModal } from "../../features/style.Slice";
import { OnFormSubmit, OnInputChange } from "../index";

const ModalBody = () => {
  const dispatch = useAppDispatch();
  const { isOpen_newUrlModal } = useAppSelector((state) => state.styleSlice);
  const [newUrl, { isLoading }] = useNewUrlMutation();
  const [reviveUrlById] = useReviveUrlByIdMutation();
  const [[isError, error], setError] = useState([false, ""]);
  const [newUrlObj, setNewUrlObj] = useState({
    name: "",
    url: "",
  });

  const handleChange = (e: OnInputChange) => {
    const { name, value } = e.target;
    setNewUrlObj({
      ...newUrlObj,
      [name]: value,
    });
  };
  const addNewUrl = async (e: OnFormSubmit): Promise<void> => {
    e.preventDefault();
    try {
      const newUrlResponse = await newUrl(newUrlObj).unwrap();
      const { success, data } = newUrlResponse;
      if (success && data.id) {
        void reviveUrlById(data.id);
        dispatch(closeNewUrlModal());
      } else throw new Error(JSON.stringify(newUrlResponse));
    } catch (err) {
      setError([true, "* Url already exists"]);
    }
  };
  useEffect(() => {
    if (!isOpen_newUrlModal) {
      setError([false, ""]);
      setNewUrlObj({
        name: "",
        url: "",
      });
    }
  }, [isOpen_newUrlModal]);

  return (
    <div className="content">
      <form onSubmit={(e) => void addNewUrl(e)}>
        <p> &nbsp; {isError && error}</p>
        <div className="input-row">
          <label>
            Name
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={newUrlObj.name}
              required
            />
          </label>
        </div>
        <div className="input-row">
          <label>
            Url
            <input
              name="url"
              type="text"
              onChange={handleChange}
              value={newUrlObj.url}
              required
            />
          </label>
        </div>
        <div className="new-server-btn-container">
          {isLoading ? (
            <span className="newUrl-loader" />
          ) : (
            <button type="submit" id="new-server-btn">
              ADD
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ModalBody;
