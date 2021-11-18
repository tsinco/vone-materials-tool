import { useState } from "react";
import InkDisplay from "./InkDisplay";

const Category: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [substrate, setSubstrate] = useState(false);
  const [ink, setInk] = useState(false);
  const handleOnclick = (Type: string) => (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    console.log(Type);
    setSelected(true);
    if (Type === "Substrate") {
      setSubstrate(true);
    } else {
      setInk(true);
    }
  };
  return (
    <div>
      {!selected ? (
        <div className="Body" style={{ minHeight: "50vh" }}>
          <a onClick={handleOnclick("Substrate")}>Substrate</a>
          <a onClick={handleOnclick("Ink")}>Ink</a>
        </div>
      ) : ink ? (
        <InkDisplay />
      ) : (
        <InkDisplay />
      )}
    </div>
  );
};
export default Category;
