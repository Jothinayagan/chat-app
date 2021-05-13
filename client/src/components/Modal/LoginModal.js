import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

function LoginModal({ modalState, closeModal }) {
    return (
        <Modal show={modalState} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title className='text-center'>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Please enter username"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Please enter password"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-center'>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button variant="success">Login</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
