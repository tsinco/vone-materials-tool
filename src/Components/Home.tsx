import React from "react";
import "./Home.css";
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
    <div className="grid-container">
      <Sidebar />
      <div className="Back">
        <a onClick={BacktoPlatform}>{"<<Back"}</a>
      </div>
      {platform === "" ? (
        <div className="Main">
          <h1 className="Title">Select Platform</h1>
          <div className="Body" style={{ minHeight: "100vh" }}>
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
