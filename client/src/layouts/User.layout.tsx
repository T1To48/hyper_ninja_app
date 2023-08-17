import { Outlet} from "react-router-dom";
import { Sidebar } from "../components";
import { useReviver } from "../hooks/useReviver";
// import useCheckCookieAndRedirect from "../hooks/useCheckCookieAndRedirect";
const UserLayout = () => {
  // useCheckCookieAndRedirect();
  useReviver();
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default UserLayout;
