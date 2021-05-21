import React from "react";
import { Button, Card, Form } from "react-bootstrap";

function Signup() {
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required />
                        </Form.Group>
                        <Form.Group id="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required />
                        </Form.Group>
                        <Form.Group id="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" required />
                        </Form.Group>
                        <Button className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <strong>Login</strong>
            </div>
        </>
    );
}

export default Signup;
