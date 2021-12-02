import Form from "./forms/MainForm";
import { useState } from "react";
import ActionButton from "../Actions/Buttons/ActionButtons";
import DisplayMaterials from "../Actions/Database/VoneMaterials";
import { Ink } from "@volterainc/utils-ink";
import defaultValue from "./defaultValue";

const VoneHome: React.FC = () => {
  const [isformReady, setFormReady] = useState(false);
  const [selectedInk, setSelectedInk] = useState<Ink>(new Ink(defaultValue));

  return (
    <div className="Main">
      {!isformReady ? (
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
                setFormReady(true);
              }}
            />
            <ActionButton
              name="Use Template"
              disabled={selectedInk.name === ""}
              onClick={() => setFormReady(true)}
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
