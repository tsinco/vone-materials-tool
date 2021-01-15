//import React, { useState } from "react";
import { useForm } from "react-hook-form";
import download from "./download";
interface profile {
  name: string;
  type: string;
  expiration: Date;
}

const Form: React.FC<profile> = (props) => {
  //const [state, setState] = useState({ ...props });
  const { handleSubmit, register } = useForm<profile>({
    defaultValues: {
      ...props,
    },
  });

  // const handleOnSubmit = (obj: any) => (
  //   e: React.FormEvent<HTMLInputElement>
  // ) => {
  //   e.preventDefault();
  //   const data = JSON.stringify(obj);
  //   alert(data);
  //   download(data, "data.json", "text/plain");
  // };

  const onSubmit = handleSubmit((obj) => {
    const data = JSON.stringify(obj);
    download(data, "data.json", "text/plain");
    // alert(JSON.stringify(data));
  });
  // const handleOnChange = (name: string) => (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setState({
  //     ...state,
  //     [name]: e.target.value,
  //   });
  // };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="type">Ink Type</label>
        <input
          name="type"
          type="text"
          //value={state.type}
          //onChange={handleOnChange("type")}
          ref={register({ required: true })}
        />

        <label htmlFor="name"> Name</label>
        <input
          name="name"
          type="text"
          //value={state.name}
          //onChange={handleOnChange("name")}
          ref={register({ required: true })}
        />

        <label htmlFor="expiration"> Expiration Date: </label>
        <input
          name="expiration"
          type="date"
          //value={new Date(state.expiration)}
          //onChange={handleOnChange("expiration")}
          ref={register({ required: true })}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
export default Form;
