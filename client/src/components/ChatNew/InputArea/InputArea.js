import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function InputArea() {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Type your message here..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="success">Send</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default InputArea;
