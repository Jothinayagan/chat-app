import React, { useState } from "react";
import { Button, Form, Navbar } from "react-bootstrap";
import LoginModal from "../Modal/LoginModal";

function NavBar() {
    const [loginModal, setLoginModal] = useState(false);

    const handleModal = () => setLoginModal(true);
    // const closeModal = () => setLoginModal(false);
    return (
        <>
            <Navbar
                bg="primary"
                sticky="top"
                className="justify-content-between"
                varient="dark">
                <Navbar.Brand>
                    <strong>Starboy</strong>
                </Navbar.Brand>
                <Form>
                    <Button variant="success" onClick={handleModal}>
                        Login
                    </Button>
                </Form>
            </Navbar>
            {loginModal === true ? (
                <LoginModal modalState={loginModal} />
            ) : null}
        </>
    );
}

export default NavBar;
