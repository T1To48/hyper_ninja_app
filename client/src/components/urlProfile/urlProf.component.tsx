import { useParams } from "react-router-dom";
import { useGetUrlByIdQuery } from "../../features/api.slice";
import { useAppSelector } from "../../app/hooks";
import UrlProfileHeader from "./urlProf.header";
import "../../styles/urlProfile/urlProfile.css";
import UrlProfileBody from "./urlProf.body";
import UpdateUrlModal from "../updateUrlModal/UpdateUrlModal.component";
type UrlIdParams = {
  urlId: string;
};
const UrlProfile = () => {
  const { urlId } = useParams<UrlIdParams>();
  const { data: urlProfile, isSuccess } = useGetUrlByIdQuery(urlId ?? "");
  const { isOpen_updateUrlModal, isOpen_deleteUrlModal } = useAppSelector(
    (state) => state.styleSlice
  );
  if (isSuccess)
    return (
      <>
        <div className="url-profile-container home">
          <UrlProfileHeader urlProfileObj={urlProfile.data} />
          <UrlProfileBody
            status={urlProfile.data.status}
            error={urlProfile.data.error}
          />
        </div>
        {isOpen_updateUrlModal && <div className="modal-bg" />}
        {isOpen_deleteUrlModal && <div className="modal-bg" />}
        <UpdateUrlModal />
      </>
    );
};

export default UrlProfile;
