import { useForm } from "react-hook-form";
import download from "./download";
import { useState, useEffect } from "react";
import "../form.css";
import { InkSettingsPanel } from "@volterainc/ui-ink";
import { Ink } from "@volterainc/utils-ink";
// import { GetInkProps } from "../Database/VoneMaterials";
import Dispensing from "./Dispensing";
interface profile {
  name: string;
  material?: string;
  expiration?: Date;
  probePitch?: Number;
  trimLength?: Number;
  tracePadPenetration?: Number;
}
interface inkProps {
  inkName: string;
}

//add interface for GetInkProps

const Form: React.FC<inkProps> = (props) => {
  const { reset, handleSubmit, register } = useForm({});
  var ink: Ink[] = [];
  const downloadurl =
    "https://raw.githubusercontent.com/VolteraInc/ink-database/master/inks/" +
    props.inkName +
    ".json";
  useEffect(() => {
    const Values = async () => {
      let response = await fetch(downloadurl);
      const data = await response.json();
      console.log(data);
      reset(data);
      ink = data + { isOverridingSettings: true };
    };
    Values();
  }, []);
  const onSubmit = handleSubmit((obj) => {
    const data = JSON.stringify(obj);
    download(data, "data.json", "text/plain");
  });

  return (
    <div className="Body">
      <form onSubmit={onSubmit}>
        <div>
          <h3>Details</h3>

          <label htmlFor="material">Ink Type</label>
          <input
            name="material"
            type="text"
            ref={register({ required: true })}
          />
          <label htmlFor="name"> Name</label>
          <input name="name" type="text" ref={register({ required: true })} />
          <label htmlFor="useBy"> Expiration Date: </label>
          <input name="useBy" type="date" ref={register({ required: true })} />
        </div>
        <div>
          <h3>Settings</h3>
          <h4>Probing</h4>
          <input
            name="settings.probing.probePitch.defaultValue"
            type="number"
            step="1"
            ref={register({ required: true })}
          />
          <label htmlFor="probePitch">ProbePitch</label>
          {/* <Dispensing ref={register({ required: true })}></Dispensing> */}

          <InkSettingsPanel
            inks={ink}
            inkInUseId={props.inkName}
            disabled={false}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Form;
