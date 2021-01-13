import Form from "./form";
import { useState } from "react";

interface props {
  id: Number;
  name: String;
  type: String;
  expiration: Date;
}
const initialValue = {
  type: "",
  name: "",
  expiration: new Date(),
};

const firstTemplate = {
  type: "Cond2",
  name: "CrazyFries",
  expiration: new Date("2013-01-08"),
};
const Templates: React.FC = () => {
  const [value, setValue] = useState(initialValue);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setValue({
    //   ...value,
    // [name]: e.target.value,
    //});
  };

  return (
    <main>
      <div>
        <button key="123" onClick={handleOnClick}>
          Blank
        </button>
        <Form {...initialValue}></Form>
      </div>
    </main>
  );
};

export default Templates;
