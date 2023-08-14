import SidebarHeader from "./Sidebar.header";
import SideBarBody from "./Sidebar.body";
import SidebarFooter from "./Sidebar.footer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "../../styles/sidebar/sidebar.css";
import { useLocation } from "react-router-dom";
import { closeChangePassModal, closeDeleteUrlModal, closeDeleteUserModal, closeNewUrlModal, closeUpdateUrlModal } from "../../features/style.Slice";
import { useEffect } from "react";
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { sidebar_className } = useAppSelector((state) => state.styleSlice);

  useEffect(() => {
    dispatch(closeChangePassModal());
    dispatch(closeNewUrlModal());
    dispatch(closeUpdateUrlModal());
    dispatch(closeDeleteUrlModal());
    dispatch(closeDeleteUserModal());
  }, [location]);
  return (
    <nav className={`sidebar ${sidebar_className}`}>
      <SidebarHeader />
      <div className="menu-bar">
        <SideBarBody />
        <SidebarFooter />
      </div>
    </nav>
  );
};

export default Sidebar;
