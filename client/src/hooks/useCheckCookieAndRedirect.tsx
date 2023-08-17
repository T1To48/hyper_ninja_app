import {useEffect} from 'react'
import { useIsAuthenticatedMutation } from '../features/api.userEndpoints'
import { useNavigate } from 'react-router-dom';

const useCheckCookieAndRedirect = (navigateTo:string) => {
    const navigate = useNavigate();
    const [isAuthenticated, { isSuccess, data }] = useIsAuthenticatedMutation();
    useEffect(() => {
      void isAuthenticated();
    }, []);
  
    useEffect(() => {
      if (isSuccess && !data?.success) navigate(navigateTo);
    }, [isSuccess, data]);
}

export default useCheckCookieAndRedirect;