// custom hook that :
//1. send response-free http request
//  AFTER 30 seconds
//2. a setimout revive the urls and update their status
// 3. setinterval every 14,19,29 minutes to  revive the wanted url ;

import { useEffect } from "react";
import {
  useLazyGetUrlsQuery,
  useQuickReviveAllMutation,
  useReviveUrlByIdMutation,
} from "../features/api.slice";
// import { useIsAuthenticatedMutation } from "../features/api.userEndpoints";

const fourteenMinutes = 840_000;
const halfMinute = 10_000;
export const useReviver = () => {
  //? on login or not ??
  // const[isAuthenticated,{isSuccess:isAuthSuccess,data:authResponse}]=useIsAuthenticatedMutation()
  const [getUrls] = useLazyGetUrlsQuery();
  const [reviveUrlById] = useReviveUrlByIdMutation();
  const [quickReviveAll, { isSuccess: quickReviveAllSuccess, isError, error }] =
    useQuickReviveAllMutation();
    // useEffect(()=>{void isAuthenticated()},[])
  useEffect(() => {
  
// if(!isAuthSuccess||!authResponse?.success)return;
    void quickReviveAll();
    const reviveInterval = setInterval(async (): Promise<void> => {
      try {
        const response = await getUrls().unwrap();
        const data = response?.data;
        if (!response?.success || data.length < 1)
          return console.log("list is Empty");
        data.forEach((urlObj) => {
          const { id, status } = urlObj;
          if (status !== "Off") {
            void reviveUrlById(id);
          }
        });
      } catch (err) {
        console.error(err);
      }
    }, halfMinute);
    return () => {
      clearInterval(reviveInterval);
    };
  }, []);
  useEffect(() => {
    if (quickReviveAllSuccess) {
      setTimeout(async (): Promise<void> => {
        try {
          const response = await getUrls().unwrap();
          const data = response?.data;
          if (!response?.success || data.length < 1)
            return console.log("list is Empty");
          data.forEach((urlObj) => {
            const { id, status } = urlObj;
            if (status !== "Off") {
              void reviveUrlById(id);
            }
          });
        } catch (err) {
          console.error(err);
        }
      }, 3000);
    }
  }, [quickReviveAllSuccess]);
};
