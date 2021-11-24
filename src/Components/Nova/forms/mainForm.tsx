import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "../Actions/_Inkform.scss";
import { Material } from "../materials/types";
interface materialProps {
  material: Material;
}

const mainForm: React.FC<materialProps> = (props) => {
  const { reset, handleSubmit, register } = useForm({});
  const [material, setMaterial] = useState<Material>(props.material);

  useEffect(() => {
    reset(props.material);
    setMaterial(props.material);
  }, []);

  const onSubmit = handleSubmit(() => {});

  const handleOnChange = (
    material: Material,
    path: string,
    value: number | string
  ) => {
    let newMat = Object.assign(material, path, value);
    setMaterial(newMat);
  };

  return (
    <div className="ink-form">
      <form onSubmit={onSubmit}>
        <div>
          <h2>Details</h2>

          <label htmlFor="id">Id</label>
          <input
            name="id"
            type="text"
            ref={register({ required: true })}
            disabled={true}
          />
          <label htmlFor="name"> Name</label>
          <input
            name="name"
            type="text"
            ref={register({ required: true })}
            onChange={(e) => handleOnChange(material, "name", e.target.value)}
          />
          <label htmlFor="category">Category</label>
          <input
            name="Category"
            type="text"
            ref={register({ required: true })}
            onChange={(e) =>
              handleOnChange(material, "category", e.target.value)
            }
          />
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            ref={register({ required: true })}
            onChange={(e) => handleOnChange(material, "type", e.target.value)}
          />
          <label htmlFor="subtype">SubType</label>
          <input
            name="subtype"
            type="text"
            ref={register({ required: true })}
            onChange={(e) =>
              handleOnChange(material, "subtype", e.target.value)
            }
          />
          <label htmlFor="icon">Icon</label>
          <input
            name="icon"
            type="text"
            ref={register({ required: true })}
            onChange={(e) => handleOnChange(material, "icon", e.target.value)}
          />
          <label htmlFor="notes">Notes</label>
          <input
            name="notes"
            type="text"
            ref={register({ required: true })}
            onChange={(e) => handleOnChange(material, "notes", e.target.value)}
          />
          <label htmlFor="custom">Custom</label>
          <input
            name="custom"
            type="text"
            ref={register({ required: true })}
            onChange={(e) => handleOnChange(material, "custom", e.target.value)}
          />
          <label htmlFor="preload">Preload</label>
          <input
            name="preload"
            type="text"
            ref={register({ required: true })}
            onChange={(e) =>
              handleOnChange(material, "preload", e.target.value)
            }
          />
        </div>

        <button type="submit">Download</button>
      </form>
    </div>
  );
};
export default mainForm;
