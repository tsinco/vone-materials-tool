import React from "react";
import "./Home.css";
import { useState } from "react";
import NovaHome from "./Forms/Nova/NovaHome";
import VoneHome from "./Forms/Vone/VoneHome";
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

  return (
    <>
      <h2 className="d-flex align-items-center justify-content-center">
        Select Platform
      </h2>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        {!selected ? (
          <div>
            <a onClick={handleOnclick("Nova")}>Nova</a>
            <a onClick={handleOnclick("Vone")}>Vone</a>
          </div>
        ) : nova ? (
          <NovaHome />
        ) : (
          <VoneHome />
        )}
      </div>
    </>
  );
};
export default Home;
