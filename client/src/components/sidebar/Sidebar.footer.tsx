import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useLogoutMutation } from "../../features/api.userEndpoints";
import { toggleMode } from "../../features/style.Slice";

const SidebarFooter = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logout,] = useLogoutMutation();
  const { sidebar_mode_text } = useAppSelector((state) => state.styleSlice);
  const handleLogout = async () => {
    try {
      const isLoggedOut=await logout().unwrap();
      console.log("isLoggedOutRES",isLoggedOut)
      if(isLoggedOut.success) navigate("/register")
      else throw new Error(JSON.stringify(isLoggedOut))
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="bottom-content">
      <li className="" onClick={()=>void handleLogout()}>
        <a >
          <i className="bx bx-log-out icon" />
          <span className="text nav-text">Logout</span>
        </a>
      </li>
      <li className="mode">
        <div className="moon-sun">
          <i className="bx bx-moon icon moon "></i>
          <i className="bx bx-sun icon sun "></i>
        </div>
        <span className="mode-text text">{sidebar_mode_text}</span>
        <div className="toggle-switch" onClick={() => dispatch(toggleMode())}>
          <span className="switch"></span>
        </div>
      </li>
    </div>
  );
};

export default SidebarFooter;
