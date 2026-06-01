import React, { useState ,  useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import "./Menu.css";
const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleProfileClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
  const closeMenu = () => setOpen(false);

  document.addEventListener("click", closeMenu);

  return () => {
    document.removeEventListener("click", closeMenu);
  };
}, []);

  const handleLogout = async () => {
  try {
    await axios.post(
      "http://localhost:3002/logout",
      {},
      { withCredentials: true }
    );

    window.location.href = "http://localhost:5173/login";
  } catch (error) {
    console.log(error);
  }
};

  const isActive = (path) => location.pathname === path;

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "30px" }} alt="Logo" />

      <div className="menus">
        <ul>
          <li>
            <Link className={`menu ${isActive("/") ? "selected" : ""}`} to="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className={`menu ${isActive("/orders") ? "selected" : ""}`} to="/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link className={`menu ${isActive("/holdings") ? "selected" : ""}`} to="/holdings">
              Holdings
            </Link>
          </li>
          <li>
            <Link className={`menu ${isActive("/positions") ? "selected" : ""}`} to="/positions">
              Positions
            </Link>
          </li>
          <li>
            <Link className={`menu ${isActive("/funds") ? "selected" : ""}`} to="/funds">
              Funds
            </Link>
          </li>
          <li>
            <Link className={`menu ${isActive("/apps") ? "selected" : ""}`} to="/apps">
              Apps
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={(e) => {
         e.stopPropagation();
         handleProfileClick();
         }}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

        {/* {open && (
          <div className="profile-dropdown">
            <p>My Profile</p>
            <p>Settings</p>
            <p onClick={handleLogout} style={{ cursor: "pointer" }}>
               Logout
            </p>
          </div>
        )} */}

        {/* {open && (
           <div className="profile-dropdown">
           <p>My Profile</p>
           <p>Settings</p>

            <p onClick={handleLogout} style={{ cursor: "pointer" }} >
               Logout
             </p>
           </div>
         )} */}

         {open && (
  <div className="profile-dropdown">
    <div className="profile-header">
      <div className="avatar-large">ZU</div>
      <div>
        <h4>USERID</h4>
        <p>user@example.com</p>
      </div>
    </div>

    <hr />

    <div className="dropdown-item">
      <i className="fa fa-user"></i>
      <span>My Profile</span>
    </div>

    <div className="dropdown-item">
      <i className="fa fa-cog"></i>
      <span>Settings</span>
    </div>

    <div
      className="dropdown-item logout"
      onClick={handleLogout}
    >
      <i className="fa fa-sign-out"></i>
      <span>Logout</span>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Menu;
