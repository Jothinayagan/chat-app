import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

// import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import Alert from "../Alert/AlertMessage";
// import Dashboard from "../ChatNew/Dashboard";

const initialState = {
    username: "",
    password: "",
};

function LoginModal({ modalState, closeModal}) {
    // const history = useHistory();
    const [_isLoginSuccess, setLoginSuccess] = useState(false);

    const [loginCredentials, setLoginCredentials] = useState(initialState);
    const [showAlert, setAlert] = useState({
        state: false,
        variant: "",
        message: "",
    });

    const handleInput = (e) =>
        setLoginCredentials({
            ...loginCredentials,
            [e.target.name]: e.target.value,
        });

    const handleLogin = () => {
        console.log("loginCredentials:", loginCredentials);

        // send login credentials to server to authenticate the user!
        axios
            .post("http://localhost:4000/api/authUser", loginCredentials)
            .then((res) => {
                console.log("Login success", res);
                setAlert({ ...showAlert, status: false });
                setLoginSuccess(true);
                // history.push("/loginSuccess");
            })
            .catch((error) => {
                console.error("error", error);
                setAlert({
                    status: true,
                    variant: "danger",
                    message: error.message,
                });
            });
    };

    return (
        <>
            <Modal show={modalState} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Please enter username"
                                onChange={handleInput}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Please enter password"
                                onChange={handleInput}
                            />
                        </Form.Group>
                    </Form>
                    {showAlert.status ? <Alert showAlert={showAlert} /> : null}
                </Modal.Body>
                <Modal.Footer>
                    <p className="d-flex justify-content-start">
                        Forgot Password?
                    </p>

                    <Button
                        className="d-flex justify-content-end"
                        variant="secondary"
                        onClick={closeModal}>
                        Close
                    </Button>

                    <Button
                        className="d-flex justify-content-end"
                        variant="success"
                        onClick={handleLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* {isLoginSuccess === true ? (
                <Router>
                    <Route>
                        <Redirect to="/loginSuccess" />
                    </Route>
                </Router>
            ) : null} */}
        </>
    );
}

export default LoginModal;
