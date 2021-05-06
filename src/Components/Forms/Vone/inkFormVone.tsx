import { useForm } from "react-hook-form";
import download from "./download";
import { useState, useEffect } from "react";
import "../form.css";
import { GetInkProps } from "../Database/VoneMaterials";
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
  inkName: String;
}
//add interface for GetInkProps

const Form: React.FC<inkProps> = (props) => {
  var Values = GetInkProps(props.inkName);
  console.log(Values);

  let initialTemplate = {
    Values,
  };
  const { handleSubmit, register } = useForm<profile>({
    defaultValues: {
      // ...Values,
    },
  });
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
          <label htmlFor="expiration"> Expiration Date: </label>
          <input
            name="expiration"
            type="date"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <h3>Settings</h3>
          <h4>Probing</h4>
          <input
            name="probePitch"
            type="number"
            step="1"
            ref={register({ required: true })}
          />
          <label htmlFor="probePitch">ProbePitch</label>
          <Dispensing ref={register({ required: true })}></Dispensing>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Form;
