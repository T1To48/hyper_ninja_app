import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  closeChangePassModal,
  closeDeleteUrlModal,
  closeDeleteUserModal,
  closeNewUrlModal,
  closeUpdateUrlModal,
} from "../../features/style.Slice";

import SidebarHeader from "./Sidebar.header";
import SideBarBody from "./Sidebar.body";
import SidebarFooter from "./Sidebar.footer";
import "../../styles/sidebar/sidebar.css";
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { sidebar_className } = useAppSelector((state) => state.styleSlice);
  const handleClick = () => {
    dispatch(closeChangePassModal());
    dispatch(closeDeleteUserModal());
  };
  useEffect(() => {
    dispatch(closeChangePassModal());
    dispatch(closeNewUrlModal());
    dispatch(closeUpdateUrlModal());
    dispatch(closeDeleteUrlModal());
    dispatch(closeDeleteUserModal());
  }, [location]);

  return (
    <nav className={`sidebar ${sidebar_className}`} onClick={handleClick}>
      <SidebarHeader />
      <div className="menu-bar">
        <SideBarBody />
        <SidebarFooter />
      </div>
    </nav>
  );
};

export default Sidebar;
