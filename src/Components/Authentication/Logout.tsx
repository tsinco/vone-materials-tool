import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
type styling = {
  icon: string;
  title: string;
};

const Logout: React.FC<styling> = (props) => {
  const { logout }: any = useAuth();
  const history = useHistory();
  async function handleLogout() {
    try {
      await logout();
    } catch {
      console.log("Failed to log out");
    } finally {
      console.log("done");
      history.push("/login");
    }
  }
  return (
    <li
      key="logout"
      className="row"
      onClick={() => {
        handleLogout();
      }}
    >
      <div id={props.icon}>{<ExitToAppIcon />}</div>
      <div id={props.title}>Logout</div>
    </li>
  );
};
export default Logout;
