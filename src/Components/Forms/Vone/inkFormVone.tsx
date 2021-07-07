import { useForm } from "react-hook-form";
import download from "./download";
import { useState, useEffect } from "react";
import "../form.css";
import { InkSettingsControl } from "@volterainc/ui-ink";
import { Ink, alterInk, alterSetting } from "@volterainc/utils-ink";
import defaultValue from "./template.test";

interface inkProps {
  inkName: string;
}
const url = {
  ink: "https://raw.githubusercontent.com/VolteraInc/ink-database/master/inks/",
  paste:
    "https://raw.githubusercontent.com/VolteraInc/ink-database/master/pastes/",
};
// trying to get rid of the "otional values" in settings
function newSettings(ink: Ink) {
  const probe = [ink.settings.probing];
  const dispense = [ink.settings.dispense];

  for (let x = 0; x < probe.length; x++) {
    if (probe[x].defaultValue !== probe[x].value) {
      probe[x].defaultValue = probe[x].value;
    } else {
    }
  }
  for (let x = 0; x < dispense.length; x++) {
    if (probe[x].defaultValue !== probe[x].value) {
      probe[x].defaultValue = probe[x].value;
    } else {
    }
  }
  console.log(probe);
  return ink;
}
const Form: React.FC<inkProps> = (props) => {
  const { reset, handleSubmit, register } = useForm({});
  const [newInk, setnewInk] = useState(new Ink(defaultValue));
  useEffect(() => {
    const downloadurl = url.ink + props.inkName + ".json";
    const getInk = async () => {
      let response = await fetch(downloadurl);
      const data = await response.json();
      reset(data);
      setnewInk(new Ink(data));
    };
    getInk();
  }, []);

  const onSubmit = handleSubmit(() => {
    // const hydrated = Object.assign(defaultValue);
    console.log(newSettings(newInk));
    const data = JSON.stringify(newInk);
    download(data, newInk.name + ".json", "text/plain");
  });
  const handleOnchange = (ink: Ink, path: string, value: number | string) => {
    setnewInk(alterInk(ink, path, value));
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
            disabled={true}
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
        <button type="submit">Download</button>
      </form>
    </div>
  );
};
export default Form;
