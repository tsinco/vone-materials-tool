import { useState } from "react";
import DisplayInk from "./DisplayInk";
import DisplaySubs from "./DisplaySubs";

const NovaHome: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [ink, setInk] = useState(false);
  const [substrate, setSubstrate] = useState(false);
  const handleOnclick = (Type: string) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(Type);
    setSelected(true);
    if (Type == "ink") {
      setInk(true);
    } else {
      setSubstrate(true);
    }
  };
  return (
    <div className="body">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        {/* <button onClick={() => setSelected(false)}>Back </button> */}
        {!selected ? (
          <>
            <button className="button" onClick={handleOnclick("Ink")}>
              Ink
            </button>
            <button className="button" onClick={handleOnclick("Substrate")}>
              Substrate
            </button>
          </>
        ) : ink ? (
          <DisplayInk />
        ) : (
          <DisplaySubs />
        )}
      </div>
    </div>
  );
};

export default NovaHome;
