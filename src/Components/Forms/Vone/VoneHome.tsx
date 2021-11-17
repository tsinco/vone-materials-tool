import Form from "./InkFormVone";
import { useState } from "react";
import ActionButton from "../Buttons/ActionButtons";
import DisplayMaterials from "../Database/VoneMaterials";
import { Ink } from "@volterainc/utils-ink";
import defaultValue from "./template.test";
const VoneHome: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [selectedInk, setSelectedInk] = useState(new Ink(defaultValue));

  const useTemplate = () => {
    setTemplateAvailable(true);
  };
  const blankTemplate = () => {
    setSelectedInk(new Ink(defaultValue));
    setTemplateAvailable(true);
  };

  return (
    <div className="Main">
      {!istemplateavailable ? (
        <div>
          <h1>Select Material</h1>
          <div className="display-materials">
            <DisplayMaterials
              parentCallback={(ink: any) => setSelectedInk(new Ink(ink))}
            />
          </div>
          <div className="ActionButtons">
            <ActionButton
              name="Blank Template"
              disabled={false}
              onClick={blankTemplate}
            />
            <ActionButton
              name="Use Template"
              disabled={selectedInk.name === ""}
              onClick={useTemplate}
            />
          </div>
        </div>
      ) : (
        <div>
          <Form ink={selectedInk} />
        </div>
      )}
    </div>
  );
};

export default VoneHome;
