import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useHistory } from "react-router-dom";

const Signup: React.FC = () => {
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup }: any = useAuth();
  const history = useHistory();

  const onSubmit = handleSubmit(async (obj: any) => {
    try {
      setError("");
      setLoading(true);
      await signup(obj.email, obj.password);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  });
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form onSubmit={onSubmit}>
          <div>
            <Form.Group id="Full Name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" ref={register({ required: true })} />
            </Form.Group>

            <Form.Group id="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={register({ required: true })} />
            </Form.Group>

            <Form.Group id="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={register({ required: true })}
              />
            </Form.Group>

            <Form.Group id="Confirm Password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={register({ required: true })}
              />
            </Form.Group>
          </div>
          <Button disabled={false} className="w-100" type="submit">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default Signup;
