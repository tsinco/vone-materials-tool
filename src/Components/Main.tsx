import React from "react";
import "./Main.scss";
import { useState } from "react";
import NovaHome from "./Forms/Nova/NovaHome";
import VoneHome from "./Forms/Vone/VoneHome";
import Sidebar from "./SideNav/Sidebar";
import { JumboButton } from "@volterainc/ui-core";

enum Platform {
  NOVA = "NOVA",
  VONE = "Vone",
  NONE = "None",
}

const Main: React.FC = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="Main">
        <Home />
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>(Platform.NONE);

  switch (platform) {
    case "NOVA":
      return <NovaHome />;
    case "Vone":
      return <VoneHome />;
  }
  return (
    <div>
      <h1>Select Platform</h1>
      <div className="ActionButtons">
        <JumboButton text="Vone" onClick={() => setPlatform(Platform.VONE)} />
        <JumboButton text="Nova" onClick={() => setPlatform(Platform.NOVA)} />
      </div>
    </div>
  );
};
export default Main;
