import { useForm } from "react-hook-form";
import download from "../../Actions/download";
import { useState, useEffect } from "react";
import "./Inkform.scss";
import { InkSettingsControl } from "@volterainc/ui-ink";
import { Ink, alterInk } from "@volterainc/utils-ink";
import defaultValue from "../defaultValue";
import { createInkDefinition } from "../hydration";
import TextInput from "./TextInput";
import ActionButton from "../../Actions/Buttons/ActionButtons";

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

          <TextInput
            label="Ink Type"
            name="type"
            type="text"
            ref={register({ required: true })}
            disabled={true}
            value={newInk.type}
          />

          <TextInput
            label="Name"
            name="name"
            type="text"
            ref={register({ required: true })}
            onChange={(e) => handleOnChange(newInk, "name", e.target.value)}
            value={newInk.name}
          />

          <TextInput
            label="Description"
            name="description"
            type="text"
            ref={register({ required: true })}
            onChange={(e) =>
              handleOnChange(newInk, "description", e.target.value)
            }
            value={newInk.description}
          />

          <TextInput
            label="Expiration Date:"
            name="useBy"
            type="date"
            ref={register({ required: true })}
            onChange={(e) => handleOnChange(newInk, "useBy", e.target.value)}
            value={newInk.useBy}
          />
        </div>
        <div className="ink-settings">
          <h3>Settings</h3>
          <InkSettingsControl
            ink={newInk}
            disabled={false}
            onChange={handleOnChange}
          />
        </div>
        <div className="ActionButtons">
          <ActionButton
            name="Download JSON"
            disabled={false}
            onClick={onSubmit}
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
