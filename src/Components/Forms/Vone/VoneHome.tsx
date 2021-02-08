import Form from "./inkForm";
import { useReducer, useState } from "react";
import reducer from "./reducer";
import { useAuth } from "../../Authentication/AuthContext";
import { useHistory } from "react-router-dom";
import Sidebar from "../../SideNav/Sidebar";

const VoneHome: React.FC = () => {
  const [available, setAvailable] = useState(false);
  const { logout }: any = useAuth();
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    inktype: "",
    name: "",
    pass_spacing: 0,
    dispense_height: 0,
  });
  const handleOnclick = (template: any) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(template);
    setAvailable(true);
  };
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
    <main>
      <Sidebar />
      <body className="body">
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
        <div>
          {!available ? (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "50vh" }}
            >
              <button
                className="button"
                onClick={handleOnclick({ type: "Blank" })}
              >
                Blank
              </button>
              <button
                className="button"
                onClick={handleOnclick({ type: "Cond2" })}
              >
                Cond2
              </button>
              <button
                className="button"
                onClick={handleOnclick({ type: "Flex2" })}
              >
                Flex2
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => setAvailable(false)}>
                Back to Templates
              </button>
              <Form {...state}> </Form>
            </div>
          )}
        </div>
      </body>
    </main>
  );
};

export default VoneHome;
