import React from "react";
import { Alert } from "react-bootstrap";

function AlertMessage({ showAlert }) {
    return (
        <Alert variant={showAlert.variant}>
            {showAlert.message}
        </Alert>
    );
}

export default AlertMessage;
