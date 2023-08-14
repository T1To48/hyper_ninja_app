import { useAppDispatch } from "../../app/hooks";
import { UrlResObj } from "../../features/api.slice";
import { FieldNames, openDeleteUrlModal, openUpdateUrlModal } from "../../features/style.Slice";
import useToggleUrl from "../../hooks/useToggleUrl";
import DeleteUrlmodal from "../deleteUrlModal/DelUrlModal.component";
import OnOffBtn from "./UrlProf.onOffBtn";
const UrlProfileHeader = ({ urlProfileObj }: { urlProfileObj: UrlResObj }) => {
  const dispatch = useAppDispatch();
  const { id,name, url, status, updatedAt } = urlProfileObj;
  const [toggleUrl]=useToggleUrl({status,id})
  const fieldsArr: FieldNames[] = ["Name", "Url", "Status"];
  const lastRevive = new Date(updatedAt).toLocaleString();
  return (
    <header>
      <div className="url-profile-details">
        {fieldsArr.map((field) => {
          const field_lowerCase = field.toLowerCase();
          const value =
            urlProfileObj[field_lowerCase as "name" | "status" | "url"];
          if (field === "Status")
            return (
              <div className="url-detail-status-row" key={field}>
                <span>{field}:</span>
                <OnOffBtn
                  isError={status === "Error"}
                  onClick={()=>void toggleUrl()}
                  checked={status === "Off" ? false : true}
                />
              </div>
            );
          else
            return (
              <div
                key={field}
                onClick={() => dispatch(openUpdateUrlModal({ field, value }))}
                className="url-detail-row editable"
              >
                <span>{field}:</span>
                <span>
                  {field_lowerCase === "url" ? (
                    <input value={value} readOnly />
                  ) : (
                    value
                  )}
                </span>
              </div>
            );
        })}
        <div className="url-detail-row not-editable">
          <span>LastRevive: </span> <span>{lastRevive} </span>
        </div>
      </div>
      <div className="delete-url-btn-container">
        <button className="delete-url-btn" onClick={()=>dispatch(openDeleteUrlModal())}>&nbsp;Delete</button>
      </div>
      <DeleteUrlmodal urlId={id} urlName={name} />
    </header>
  );
};
export default UrlProfileHeader;
