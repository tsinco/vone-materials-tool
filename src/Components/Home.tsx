import React from "react";
import "./Home.scss";
import { useState } from "react";
import NovaHome from "./Forms/Nova/NovaHome";
import VoneHome from "./Forms/Vone/VoneHome";
import Sidebar from "./SideNav/Sidebar";
import { JumboButton } from "@volterainc/ui-core";

const Home: React.FC = () => {
  const [platform, setPlatform] = useState("");
  const handleOnclick = (Type: string) => {
    if (Type === "Nova") {
      setPlatform("Nova");
    }
    if (Type === "Vone") {
      setPlatform("Vone");
    } else {
    }
  };

  const BacktoPlatform = () => {
    setPlatform("");
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="topNav">
        <a onClick={BacktoPlatform}>{"<<Back"}</a>
      </div>
      {platform === "" ? (
        <div className="Main">
          <h1>Select Platform</h1>
          <div className="ActionButtons">
            <JumboButton text="Vone" onClick={() => handleOnclick("Vone")} />
            <JumboButton text="Nova" onClick={() => handleOnclick("Nova")} />
          </div>
        </div>
      ) : platform === "Nova" ? (
        <NovaHome />
      ) : (
        <VoneHome />
      )}
    </div>
  );
};
export default Home;
