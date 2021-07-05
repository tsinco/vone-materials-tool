import { useForm } from "react-hook-form";
import download from "./download";
import { useState, useEffect } from "react";
import "../form.css";
import { InkSettingsControl } from "@volterainc/ui-ink";
import { Ink, alterInk } from "@volterainc/utils-ink";
import AdorableAnchovy from "./template.test";
import { getConstantValue } from "typescript";
// import { GetInkProps } from "../Database/VoneMaterials";
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
  const { reset, handleSubmit, register, getValues } = useForm({});
  const [name, setName] = useState("");
  //Change AdorableAnchovy to default state
  const [newInk, setnewInk] = useState(new Ink(AdorableAnchovy));
  console.log(newInk);
  const downloadurl =
    "https://raw.githubusercontent.com/VolteraInc/ink-database/master/inks/" +
    props.inkName +
    ".json";
  useEffect(() => {
    const Values = async () => {
      let response = await fetch(downloadurl);
      const data = await response.json();
      reset(data);
      setnewInk(new Ink(data));
    };
    Values();
  }, []);
  const onSubmit = handleSubmit((obj) => {
    const data = JSON.stringify(obj);
    download(data, "data.json", "text/plain");
  });
  const handleOnchange = (ink: Ink, path: string, value: number | string) => {
    setnewInk(alterInk(ink, path, value));
    console.log(ink, path, value);
  };

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
          <input
            name="name"
            type="text"
            ref={register({ required: true })}
            onChange={(e) => handleOnchange(newInk, "name", e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            name="description"
            type="text"
            ref={register({ required: true })}
            onChange={(e) =>
              handleOnchange(newInk, "description", e.target.value)
            }
          />
          <label htmlFor="useBy"> Expiration Date: </label>
          <input
            name="useBy"
            type="date"
            ref={register({ required: true })}
            onChange={(e) => handleOnchange(newInk, "useBy", e.target.value)}
          />
        </div>
        <div>
          <h3>Settings</h3>
          <InkSettingsControl
            ink={newInk}
            disabled={false}
            onChange={handleOnchange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Form;
