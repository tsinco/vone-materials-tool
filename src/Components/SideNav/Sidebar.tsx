import React from "react";
import "./SideNav.css";
import { SidebarData } from "./SidebarData";
import Logout from "../Authentication/Logout";

const Sidebar: React.FC = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {""}
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <Logout />
    </div>
  );
};

export default Sidebar;
