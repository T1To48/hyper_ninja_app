import { NavLink } from "react-router-dom";
// import { useAppDispatch } from "../../app/hooks";
// import { openSidebar } from "../../features/style.Slice";

const SideBarBody = () => {
  // const dispatch = useAppDispatch();

  return (
    <div className="menu">
      {/* <li className="search-box" onClick={() => dispatch(openSidebar())}>
        <NavLink to="#" className="pages-sidebar">
          <i className="bx bx-search-alt icon" />
          <input type="text" placeholder=" Search..." />
        </NavLink>
      </li> */}
      <ul className="menu-links">
        <li className="nav-links">
          <NavLink to="/user-area" className="pages-sidebar">
            <i className="bx bx-home-alt icon" />
            <span className="text nav-text">Dashboard</span>
          </NavLink>
        </li>
        {/* <li className="nav-links">
          <NavLink to="#" className="pages-sidebar">
            <i className="bx bx-server icon" />
            <span className="text nav-text">Server Setings</span>
          </NavLink>
        </li> */}
        <li className="nav-links">
          <NavLink to="profile" className="pages-sidebar">
            <i className="bx bx-user icon" />
            <span className="text nav-text">Profile</span>
          </NavLink>
        </li>
        {/* <li className="nav-links">
            <NavLink to="#" className="pages-sidebar" >
              <i className="bx bx-pie-chart-alt icon" />
              <span className="text nav-text">Analytics</span>
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="#" className="pages-sidebar" >
              <i className="bx bx-heart icon" />
              <span className="text nav-text">Likes</span>
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="#" className="pages-sidebar" >
              <i className="bx bx-wallet icon" />
              <span className="text nav-text">Wallets</span>
            </NavLink>
          </li> */}
      </ul>
    </div>
  );
};

export default SideBarBody;
