import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Logout: React.FC = () => {
  const { logout }: any = useAuth();
  const history = useHistory();
  async function handleLogout() {
    try {
      await logout();
    } catch {
      console.log("Failed to log in");
    } finally {
      console.log("done");
      history.push("/login");
    }
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Logout;
