import Form from "./inkFormVone";
import "./VoneHome.css";
import { useState } from "react";
import { Loadmaterials_Vone } from "../Database/VoneMaterials";
import ActionButton from "../Buttons/actionButtons";
import { standardOrder } from "@volterainc/utils-ink";

const VoneHome: React.FC = () => {
  const [istemplateavailable, setTemplateAvailable] = useState(false);
  const [istemplateSelected, setTemplateSelected] = useState(false);
  const [details, setDetails] = useState("");
  const data = Loadmaterials_Vone();
  console.log(standardOrder(data));
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
  const useTemplate = () => {
    setTemplateAvailable(true);
  };
  const blankTemplate = () => {
    setDetails("");
    setTemplateAvailable(true);
  };
  return (
    <div className="Main">
      {!istemplateavailable ? (
        <div className="body">
          <h2 className="Title">Select Material</h2>
          <ul>
            <div className="list-inks">
              {standardOrder(data)
                .slice(0, 2)
                .map((typeInks) => {
                  const type = typeInks[0].type;
                  return (
                    <div key={type} className="ink-selection-list">
                      <div className="type">
                        <h4>{type}</h4>
                      </div>
                      {typeInks.slice(0, 5).map((inks) => {
                        return (
                          <a
                            key={inks.id}
                            className="row"
                            onClick={() => {
                              handleOnselect(inks.name);
                            }}
                          >
                            <div id="name">{inks.name}</div>
                          </a>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </ul>
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
              disabled={!istemplateSelected}
              onClick={useTemplate}
            />
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setTemplateAvailable(false)}>
            Back to Templates
          </button>
          <Form inkName={details} />
        </div>
      )}
    </div>
  );
};

export default VoneHome;
