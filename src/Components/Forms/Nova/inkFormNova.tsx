import { useForm } from "react-hook-form";
// import { GetInkProps } from "../Database/NovaMaterials";
import "../form.css";
interface profile {
  name?: string;
  inktype?: string;
  expiration?: Date;
  pass_spacing?: Number;
  dispense_height?: Number;
}
interface inkProps {
  inkID: string;
}
const FormNova: React.FC<inkProps> = (props) => {
  // const values = GetInkProps(props.inkID);
  // console.log(values);
  const { handleSubmit, register } = useForm<profile>({
    defaultValues: {},
  });
  const onSubmit = handleSubmit((obj) => {
    const data = JSON.stringify(obj);
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
          {/* <Dispensing ref={register({ required: true })}></Dispensing> */}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default FormNova;
