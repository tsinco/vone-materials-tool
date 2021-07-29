import { useForm } from "react-hook-form";
import download from "./download";
import { useState, useEffect } from "react";
import "../form.css";
import { InkSettingsControl } from "@volterainc/ui-ink";
import { Ink, alterInk } from "@volterainc/utils-ink";
import defaultValue from "./template.test";
import { createInkDefinition } from "./hydration";
interface inkProps {
  inkName: string;
}
const url = {
  ink: "https://raw.githubusercontent.com/VolteraInc/ink-database/master/inks/",
  paste:
    "https://raw.githubusercontent.com/VolteraInc/ink-database/master/pastes/",
};
const Form: React.FC<inkProps> = (props) => {
  const { reset, handleSubmit, register } = useForm({});
  const [newInk, setNewInk] = useState(new Ink(defaultValue));
  useEffect(() => {
    const downloadurl = url.ink + props.inkName + ".json";
    const getInk = async () => {
      let response = await fetch(downloadurl);
      const data = await response.json();
      reset(data);
      setNewInk(new Ink(data));
    };
    getInk();
  }, []);

  const onSubmit = handleSubmit(() => {
    const formattedInk = createInkDefinition(newInk);
    const data = JSON.stringify(formattedInk);
    download(data, newInk.name + ".json", "text/plain");
  });
  const handleOnChange = (ink: Ink, path: string, value: number | string) => {
    setNewInk(alterInk(ink, path, value));
  };

  return (
    <div className="Body">
      <form onSubmit={onSubmit}>
        <div>
          <h2>Details</h2>

          <label htmlFor="material">Ink Type</label>
          <input
            name="material"
            type="text"
            ref={register({ required: true })}
            disabled={true}
          />
          <label htmlFor="name"> Name</label>
          <input
            name="name"
            type="text"
            ref={register({ required: true })}
            onChange={(e) => handleOnChange(newInk, "name", e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            name="description"
            type="text"
            ref={register({ required: true })}
            onChange={(e) =>
              handleOnChange(newInk, "description", e.target.value)
            }
          />
          <label htmlFor="useBy"> Expiration Date: </label>
          <input
            name="useBy"
            type="date"
            ref={register({ required: true })}
            onChange={(e) => handleOnChange(newInk, "useBy", e.target.value)}
          />
        </div>
        <div>
          <h3>Settings</h3>
          <InkSettingsControl
            ink={newInk}
            disabled={false}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Download</button>
      </form>
    </div>
  );
};
export default Form;
