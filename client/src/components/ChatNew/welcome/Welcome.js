import React from "react";
import { Container } from "react-bootstrap";
import Signup from "../Signup/Signup";

function Welcome() {
    return (
        <Container
            className="d-flex align-item-center justify-content-center mt-4"
            style={{ minHeight: "70vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signup />
            </div>
        </Container>
    );
}

export default Welcome;
