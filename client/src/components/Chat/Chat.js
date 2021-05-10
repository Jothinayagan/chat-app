import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = `localhost:4000`;

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        // Transports used to allow headers and support cors policies
        socket = io(ENDPOINT, {
            transports: ["websocket", "polling", "flashsocket"],
        });

        console.log(socket);
    }, [ENDPOINT, location.search]);

    return <h1>Chat Component</h1>;
};

export default Chat;
