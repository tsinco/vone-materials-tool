import Form from "./InkFormVone";
import { useState } from "react";
import ActionButton from "../Actions/Buttons/ActionButtons";
import DisplayMaterials from "../Actions/Database/VoneMaterials";
import { Ink } from "@volterainc/utils-ink";
import defaultValue from "./defaultValue";
const VoneHome: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [selectedInk, setSelectedInk] = useState(new Ink(defaultValue));

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
              onClick={() => {
                setSelectedInk(new Ink(defaultValue));
                setTemplateAvailable(true);
              }}
            />
            <ActionButton
              name="Use Template"
              disabled={selectedInk.name === ""}
              onClick={() => setTemplateAvailable(true)}
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
