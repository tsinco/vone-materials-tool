import React, { useState, useReducer } from "react";
import download from "./download";
interface profile {
  name: string;
  type: string;
  expiration: Date;
}

const Form: React.FC<profile> = (props) => {
  const [state, setState] = useState({ ...props });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => (obj: any) => {
    e.preventDefault();
    const data = JSON.stringify(obj);
    download(data, "data.json", "text/plain");
  };
  const handleOnChange = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">Ink Type</label>
        <input
          name="type"
          type="text"
          value={state.type}
          onChange={handleOnChange("type")}
        />

        <label htmlFor="name"> Name</label>
        <input
          name="name"
          type="text"
          value={state.name}
          onChange={handleOnChange("name")}
        />

        <label htmlFor="expiration"> Expiration Date</label>
        <input
          name="expiration"
          type="date"
          //value={new Date(state.expiration)}
          onChange={handleOnChange("expiration")}
        />

        <button type="submit" value="Download File">
          Download
        </button>
      </div>
    </form>
  );
};
export default Form;
