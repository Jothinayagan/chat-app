import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

import "./Join.css";

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input
                        placeholder="Name"
                        className="joinInput"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder="Room"
                        className="joinInput mt-20"
                        type="text"
                        onChange={(e) => setRoom(e.target.value)}
                    />
                </div>
                <Link
                    to={`/chat?name=${name}&room=${room}`}
                    onClick={(e) =>
                        !name || !room ? e.preventDefault() : null
                    }>
                    <button className="button mt-20">Sign in</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
