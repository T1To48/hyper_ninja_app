import { useEffect } from "react";
import { useIsAuthenticatedMutation } from "../features/api.userEndpoints";
import { useNavigate } from "react-router-dom";

const useCheckCookieAndRedirect = (userArea: boolean) => {
  const navigate = useNavigate();
  const [isAuthenticated, { isSuccess, data }] = useIsAuthenticatedMutation();
  useEffect(() => {
    void isAuthenticated();
  }, []);

  useEffect(() => {
    //not user and goes to userarea
    if (userArea && isSuccess && !data?.success) navigate("/register");
    // a user and goes out of users-area
    else if (!userArea && isSuccess && data?.success) navigate("/user-area");
  }, [isSuccess, data]);
};

export default useCheckCookieAndRedirect;
