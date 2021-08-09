import Form from "./inkFormVone";
import "./VoneHome.css";
import { useState } from "react";
import ActionButton from "../Buttons/actionButtons";
import DisplayMaterials from "../Database/VoneMaterials";

const VoneHome: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [selectedInk, setSelectedInk] = useState("");

  const useTemplate = () => {
    setTemplateAvailable(true);
  };
  const blankTemplate = () => {
    setSelectedInk("");
    setTemplateAvailable(true);
  };

  return (
    <div className="Main">
      {!istemplateavailable ? (
        <div className="body">
          <h2 className="Title">Select Material</h2>

          <DisplayMaterials
            parentCallback={(inkName: string) => setSelectedInk(inkName)}
          />

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "50vh" }}
          >
            <ActionButton
              name="Blank Template"
              disabled={false}
              onClick={blankTemplate}
            />
            <ActionButton
              name="Use Template"
              disabled={selectedInk.length === 0}
              onClick={useTemplate}
            />
          </div>
        </div>
      ) : (
        <div>
          <a onClick={() => setTemplateAvailable(false)}>Back to Templates</a>
          <Form inkName={selectedInk} />
        </div>
      )}
    </div>
  );
};

export default VoneHome;
