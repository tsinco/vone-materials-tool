import FormNova from "./inkFormNova";
import { useState } from "react";
import { Loadmaterials_Nova } from "../Actions/Database/NovaMaterials";
import ActionButton from "../Actions/Buttons/ActionButtons";
import Category from "./Category";
const initialTemplate = {
  inktype: "",
  name: "",
  pass_spacing: 0,
  dispense_height: 0,
};

const NovaHome: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [istemplateSelected, setTemplateSelected] = useState(false);
  const [template, setTemplate] = useState(initialTemplate);
  const [details, setDetails] = useState("");

  const handleOnselect = (inkname: any) => {
    if (!istemplateSelected && details !== inkname) {
      setDetails(inkname);
      setTemplateSelected(true);
    }
    if (istemplateSelected && details === inkname) {
      setDetails("");
      setTemplateSelected(false);
    }
    if (istemplateSelected && details !== inkname) {
      setDetails(inkname);
      setTemplateSelected(true);
    } else {
    }
  };
  return (
    <div className="Main">
      <div>
        <h2 className="Title">Select Material</h2>
        <Category />
      </div>
    </div>
  );
};

export default NovaHome;
