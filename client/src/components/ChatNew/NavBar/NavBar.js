import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Navbar } from "react-bootstrap";

import { openModal } from "../../../redux/actions";
import LoginModal from "../Modal/LoginModal";

export default function NavBar() {
    const loginModal = useSelector((state) => state.toggleLoginModal);
    console.log("Loginmodal", loginModal);
    const dispatchModalAction = useDispatch();

    const handleModal = () => dispatchModalAction(openModal());

    return (
        <>
            <Navbar
                bg="primary"
                sticky="top"
                className="justify-content-between"
                varient="dark">
                <Navbar.Brand>
                    <strong>Chat Application</strong>
                </Navbar.Brand>
                <Form>
                    <Button variant="success" onClick={handleModal}>
                        Login
                    </Button>
                </Form>
            </Navbar>
            {loginModal ? <LoginModal /> : null}
        </>
    );
}
