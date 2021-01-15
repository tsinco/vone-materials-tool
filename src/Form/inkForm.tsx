//import React, { useState } from "react";
import { useForm } from "react-hook-form";
import download from "./download";
interface profile {
  name?: string;
  inktype?: string;
  expiration?: Date;
}

const Form: React.FC<profile> = (props) => {
  const { handleSubmit, register, errors } = useForm<profile>({
    defaultValues: {
      ...props,
    },
  });
  const onSubmit = handleSubmit((obj) => {
    const data = JSON.stringify(obj);
    download(data, "data.json", "text/plain");
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="inktype">Ink Type</label>
        <input name="inktype" type="text" ref={register({ required: true })} />

        <label htmlFor="name"> Name</label>
        <input name="name" type="text" ref={register({ required: true })} />

        <label htmlFor="expiration"> Expiration Date: </label>

        <input
          name="expiration"
          type="date"
          ref={register({ required: true })}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
export default Form;
