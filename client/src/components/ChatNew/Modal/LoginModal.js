import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Alert from "../Alert/AlertMessage";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/actions";

const initialState = {
    username: "",
    password: "",
};

function LoginModal() {
    const history = useHistory();
    const [loginCredentials, setLoginCredentials] = useState(initialState);
    const [showAlert, setAlert] = useState({
        state: false,
        variant: "",
        message: "",
    });

    // Get modal state from redux store
    const loginModalState = useSelector((state) => state.toggleLoginModal);
    const loginDispatch = useDispatch();

    const handleModal = () => loginDispatch(closeModal());

    const handleInput = (e) =>
        setLoginCredentials({
            ...loginCredentials,
            [e.target.name]: e.target.value,
        });

    const handleLogin = () => {
        // send login credentials to server to authenticate the user!
        axios
            .post("http://localhost:4000/api/authUser", loginCredentials)
            .then((res) => {
                setAlert({ ...showAlert, status: false });
                handleModal();
                history.push("/loginSuccess");
            })
            .catch((error) => {
                setAlert({
                    status: true,
                    variant: "danger",
                    message: error.message,
                });
            });
    };

    return (
        <Modal show={loginModalState} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title className="text-center">Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formUsername">
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
                            autoComplete='false'
                            onChange={handleInput}
                        />
                    </Form.Group>
                </Form>
                {showAlert.status ? <Alert showAlert={showAlert} /> : null}
            </Modal.Body>
            <Modal.Footer>
                <p className="d-flex justify-content-start">Forgot Password?</p>

                <Button
                    className="d-flex justify-content-end"
                    variant="secondary"
                    onClick={handleModal}>
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
    );
}

export default LoginModal;
