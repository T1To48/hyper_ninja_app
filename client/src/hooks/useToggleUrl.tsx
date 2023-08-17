import { useUpdateUrlByIdMutation } from "../features/api.slice";
import { Status } from "../types/url.types";
import { useReviveUrl } from "./useReviveUrl";
const useToggleUrl = ({ status, id }: { status: Status; id: string }) => {
  const [reviveUrl] = useReviveUrl();
  const [updateUrlById] = useUpdateUrlByIdMutation();
  const toggleUrl = async (): Promise<void> => {
    const newStatus: Status = status === "Off" ? "Loading" : "Off";
    const updateObj = {
      id,
      data: { status: newStatus },
    };
    try {
      const updatedUrl = await updateUrlById(updateObj).unwrap();
      if (updatedUrl.success && updatedUrl.data.status !== "Off") {
        void reviveUrl(id);
      } else if (updatedUrl.success && updatedUrl.data.status === "Off") return;
      else {
        throw new Error(JSON.stringify(updatedUrl));
      }
    } catch (err) {
      console.log("error in turning on/off the url, Error==>  ", err);
    }
  };
  return [toggleUrl] as const;
};

export default useToggleUrl;
