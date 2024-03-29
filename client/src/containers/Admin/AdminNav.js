import React from "react";
import { Link ,Navigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./admin.css";

const AdminNav = () => {
  return (
    <div className="adminNavbar">
      <ul>
        <Link to="/adminUsers">
          <li>
            <h1>Users</h1>
          </li>
        </Link>
        <Link to="/home">
          <li>
            <HomeIcon />
          </li>
        </Link>
        <Link to="/adminGroups">
          <li>
            <h1>Groups</h1>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminNav;
