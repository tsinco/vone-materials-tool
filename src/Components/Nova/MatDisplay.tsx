import FormNova from "./forms/mainForm";
import { useState } from "react";
import { Loadmaterials_Nova } from "../Actions/Database/NovaMaterials";
import ActionButton from "../Actions/Buttons/ActionButtons";

const MatDisplay: React.FC = () => {
  const data = Loadmaterials_Nova().data;

  return (
    <div className="Main">
      <div>
        <ul>
          {data.map((val, key) => {
            return (
              <a key={key} className="row" onClick={() => {}}>
                <div id="name">{val}</div>
              </a>
            );
          })}
        </ul>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="ActionButtons">
            <ActionButton
              name="Blank Template"
              disabled={false}
              onClick={() => {}}
            />
            <ActionButton
              name="Use Template"
              disabled={false}
              onClick={() => {}}
            />
            <ActionButton name="Update" disabled={false} />
            <ActionButton name="Delete" disabled={false} />
          </div>
        </div>
      </div>
      )
      <div>
        <button onClick={() => {}}>Back to Templates</button>
        {/* <mainForm materialProps={details}/>  */}
      </div>
    </div>
  );
};

export default MatDisplay;
