import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface FormData {
  email: any;
  password: any;
}

const Login: React.FC = () => {
  const { handleSubmit } = useForm<FormData>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login }: any = useAuth();
  const history = useHistory();

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
  // const onSubmit = handleSubmit(() => {

  //   login(emailRef.current?.value, passwordRef.current?.value);
  //   history.push("/");
  // });
  async function onSubmit() {
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current?.value, passwordRef.current?.value);
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
    history.push("/");
  }

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <div className="w-100 text-center mt-3">Forgot Password?</div>
        <div className="w-100 text-center mt-2">
          Don't have an account?<Link to="/signup">Sign Up</Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Login;
