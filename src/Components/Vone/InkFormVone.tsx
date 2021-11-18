import { useForm } from "react-hook-form";
import download from "../Actions/download";
import { useState, useEffect } from "react";
import "../Actions/_Inkform.scss";
import { InkSettingsControl } from "@volterainc/ui-ink";
import { Ink, alterInk } from "@volterainc/utils-ink";
import defaultValue from "./defaultValue";
import { createInkDefinition } from "./hydration";
interface inkProps {
  ink: Ink;
}
const Form: React.FC<inkProps> = (props) => {
  const { reset, handleSubmit, register } = useForm({});
  const [newInk, setNewInk] = useState(new Ink(defaultValue));

  useEffect(() => {
    reset(props.ink);
    setNewInk(props.ink);
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
    <div className="ink-form">
      <form onSubmit={onSubmit}>
        <div>
          <h2>Details</h2>

          <label htmlFor="type">Ink Type</label>
          <input
            name="type"
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
