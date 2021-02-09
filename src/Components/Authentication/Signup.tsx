import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { useAuth } from "./AuthContext";
import { Link, useHistory } from "react-router-dom";

interface FormData {
  email: string;
  password: any;
}

const Signup: React.FC = () => {
  const { handleSubmit } = useForm<FormData>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmpasswordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup }: any = useAuth();
  const history = useHistory();

  async function onSubmit() {
    if (
      passwordRef.current?.value !== confirmpasswordRef.current?.value &&
      !null
    ) {
      setError("Password doesn't match");
    }
    if (!emailRef.current?.value.includes("voltera.io")) {
      setError("Invalid Email");
    } else {
      try {
        setError("");
        setLoading(true);
        await signup(emailRef.current?.value, passwordRef.current?.value);
        history.push("/");
      } catch {
        setError("Something went wrong");
      }
      setLoading(false);
      history.push("/");
    }
  }
  // const onSubmit = handleSubmit(() => {
  //   signup(emailRef.current?.value, passwordRef.current?.value);
  //   history.push("/");
  // });
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Form.Group id="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} />
            </Form.Group>

            <Form.Group id="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} />
            </Form.Group>

            <Form.Group id="Confirm Password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={confirmpasswordRef} />
            </Form.Group>
          </div>
          <Button disabled={loading} className="w-100" type="submit">
            Sign Up
          </Button>
        </Form>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Signup;
