import { useEffect } from "react";
import {
  useLazyGetUrlsQuery,
  useQuickReviveAllMutation,
  useReviveUrlByIdMutation,
} from "../features/api.slice";

const fourteenMinutes = 800_000;
const halfMinute = 30_000;
export const useReviver = () => {
  // const[isAuthenticated,{isSuccess:isAuthSuccess,data:authResponse}]=useIsAuthenticatedMutation()
  const [getUrls] = useLazyGetUrlsQuery();
  const [reviveUrlById] = useReviveUrlByIdMutation();
  const [quickReviveAll, { isSuccess: quickReviveAllSuccess }] =
    useQuickReviveAllMutation();
  useEffect(() => {
    // if(!isAuthSuccess||!authResponse?.success)return;
    void quickReviveAll();
    const reviveInterval = setInterval(() => {
      getUrls()
        .unwrap()
        .then((response) => {
          const data = response.data;
          if (!response.success || data.length < 1) {
            return;
          }
          data.forEach((urlObj) => {
            const { id, status } = urlObj;
            console.log("setInterval", urlObj);
            if (status !== "Off") {
              void reviveUrlById(id);
            }
          });
        })
        .catch((err) => console.error(err));
      // try {
      //   const response = await getUrls().unwrap();
      //   const data =await response?.data;
      //   if (!response?.success || data.length < 1)
      //     return  ;
      //  await data.forEach((urlObj) => {
      //     const { id, status } = urlObj;
      //     if (status !== "Off") {
      //       void reviveUrlById(id);
      //     }
      //   });
      // } catch (err) {
      //   console.error(err);
      // }
    }, fourteenMinutes);
    return () => {
      clearInterval(reviveInterval);
    };
  }, []);
  useEffect(() => {
    if (quickReviveAllSuccess) {
      setTimeout(() => {
        getUrls()
          .unwrap()
          .then((response) => {
            const data = response.data;
            if (!response.success || data.length < 1) {
              return;
            }
            data.forEach((urlObj) => {
              const { id, status } = urlObj;
              // console.log("timeOut",urlObj)
              if (status !== "Off") {
                void reviveUrlById(id);
              }
            });
          })
          .catch((err) => console.error(err));

        // try {
        //   const response = await getUrls().unwrap();
        //   const data =await response?.data;
        //   if (!response?.success || data.length < 1)
        //     return ;
        //   data.forEach((urlObj) => {
        //     const { id, status } = urlObj;
        //     if (status !== "Off") {
        //       void reviveUrlById(id);
        //     }
        //   });
        // } catch (err) {
        //    console.error(err);
        // }
      }, halfMinute);
    }
  }, [quickReviveAllSuccess]);
};
