import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { handleSubmit, register } = useForm<FormData>();

  // const onSubmit = handleSubmit(async (obj: any) => {
  //   try {
  //     setError("");
  //     setLoading(true);
  //     await login(obj.email, obj.password);
  //     history.push("/");
  //   } catch {
  //     setError("Failed to log in");
  //   }
  //   setLoading(false);
  // });
  const onSubmit = handleSubmit((obj) => {
    const data = JSON.stringify(obj);
    console.log(data, "data.json", "text/plain");
  });

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        <Form onSubmit={onSubmit}>
          <div>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={register({ required: true })} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={register({ required: true })}
              />
            </Form.Group>
            <Button disabled={false} className="w-100" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        {/* <div className="w-100 text-center mt-3">
           <Link to="">Forgot Password?</Link> 
        </div>
        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to="/Signup">Sign Up</Link>
  </div> */}
      </Card.Body>
    </Card>
  );
};
export default Login;
