interface TextProps {
  label: string;
  name: string;
  type: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  ref: React.Ref<any>;
  value: any;
}

export default function TextInput(props: TextProps) {
  const { name, type, onChange, disabled, ref, label, value } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        ref={ref}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
    </div>
  );
}
