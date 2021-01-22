import React from "react";
import useForm from "react-hook-form";
const Login: React.FC = () => {
  const { handleSubmit, register } = useForm([]);
  const onSubmit = handleSubmit((obj: any) => {
    console.log(JSON.stringify(obj));
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h3>Log In</h3>

        <label htmlFor="email">Ink Type</label>
        <input name="email" type="text" ref={register({ required: true })} />
        <label htmlFor="password"> Name</label>
        <input
          name="password"
          type="password"
          ref={register({ required: true })}
        />
      </div>
    </form>
  );
};
export default Login;
