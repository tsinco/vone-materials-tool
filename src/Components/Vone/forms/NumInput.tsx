interface NumProps {
  name: string;
  type: string;
  onChange: any;
  disabled?: boolean;
  step: string;
  ref: any;
}

export default function NumInput(props: NumProps) {
  const { name, type, onChange, disabled, ref, step } = props;

  return (
    <div>
      <input name={name} type={type} step={step} ref={ref} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
