import React from "react";
import "./Home.css";
import { useState } from "react";
import NovaHome from "./Forms/Nova/NovaHome";
import VoneHome from "./Forms/Vone/VoneHome";
import Sidebar from "./SideNav/Sidebar";
const Home: React.FC = () => {
  // const NovaRef = useRef<HTMLLinkElement>();
  // const VoneRef = useRef<HTMLLinkElement>();
  const [selected, setSelected] = useState(false);
  const [nova, setNova] = useState(false);
  const [vone, setVone] = useState(false);
  const handleOnclick = (Type: string) => (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    console.log(Type);
    setSelected(true);
    if (Type === "Nova") {
      setNova(true);
    } else {
      setVone(true);
    }
  };
  const BacktoPlatform = () => {
    setSelected(false);
    setNova(false);
    setVone(false);
  };
  return (
    <div className="grid-container">
      <Sidebar />
      <div className="Back">
        <a onClick={BacktoPlatform}>{"<<Back"}</a>
      </div>
      {!selected ? (
        <div className="Main">
          <h2 className="Title">Select Platform</h2>
          <div className="Body" style={{ minHeight: "50vh" }}>
            <a onClick={handleOnclick("Vone")}>Vone</a>
            <a onClick={handleOnclick("Nova")}>Nova</a>
          </div>
        </div>
      ) : nova ? (
        <NovaHome />
      ) : (
        <VoneHome />
      )}
    </div>
  );
};
export default Home;
