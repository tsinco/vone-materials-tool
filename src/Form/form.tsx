import React from "react";
import { useForm } from "react-hook-form";
import download from "./download";

interface profile {
  type: string;
  name: string;
  expiration: Date;
}

const Form: React.FC<profile> = (props) => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      type: props.type,
      name: props.name,
      expiration: props.expiration,
    },
  });

  const onSubmit = handleSubmit((obj) => {
    const data = JSON.stringify(obj);
    download(data, "data.json", "text/plain");
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="type">Ink Type</label>
        <input name="type" type="text" ref={register({ required: true })} />
        {errors.type && <div className="error">Enter Type of Ink</div>}

        <label htmlFor="name"> Name</label>
        <input name="name" type="text" ref={register({ required: true })} />
        {errors.name && <div className="error">Enter Name of Ink</div>}

        <label htmlFor="expiration"> Expiration Date</label>
        <input
          name="expiration"
          type="date"
          ref={register({ required: true })}
        />
        {errors.expiration && <div className="error">Enter Valid Date</div>}
        <button type="submit" value="Download File">
          Download
        </button>
      </div>
    </form>
  );
};
export default Form;
