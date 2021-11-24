import { Directions } from "@material-ui/icons";

interface Dispensing {
  ref?: any;
}

const Dispensing: React.FC<Dispensing> = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4>Dispensing</h4>
      <input name="trimLength" type="number" step="1" ref={props.ref} />
      <label htmlFor="trimLength">TrimLength</label>

      <input
        name="tracePadPenetration"
        type="number"
        step="0.01"
        ref={props.ref}
      />
      <label htmlFor="tracePadPenetration">tracePadPenetration</label>

      <input name="dispenseHeight" type="number" step="0.1" ref={props.ref} />
      <label htmlFor="dispenseHeight">dispenseHeight</label>

      <input name="feedrate" type="number" step="1" ref={props.ref} />
      <label htmlFor="feedrate">feedrate</label>

      <input name="passSpacing" type="number" step="0.01" ref={props.ref} />
      <label htmlFor="passSpacing">passSpacing</label>
      <input name="antiString" type="number" step="0.1" ref={props.ref} />
      <label htmlFor="antiString">antiString</label>

      <input name="kick" type="number" step="0.1" ref={props.ref} />
      <label htmlFor="kick">kick</label>

      <input name="softStart" type="number" step="0.1" ref={props.ref} />
      <label htmlFor="softStart">softStart</label>

      <input name="softStop" type="number" step="0.1" ref={props.ref} />
      <label htmlFor="softStop">softStop</label>

      <input
        name="rheologicalSetpoint"
        type="number"
        step="0.1"
        ref={props.ref}
      />
      <label htmlFor="rheologicalSetpoint">rheologicalSetpoint</label>
    </div>
  );
};

export default Dispensing;
