import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import "./Chat.css";

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const ENDPOINT = `localhost:4000`;

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        // Transports used to allow headers and support cors policies
        socket = io(ENDPOINT, {
            transports: ["websocket", "polling", "flashsocket"],
        });

        setName(name);
        setRoom(room);

        socket.emit("join", { name, room }, () => {});

        return () => {
            socket.emit("disconnect"); // emit disconnect event to backend
            socket.off(); // turn off the user/instance
        };
    }, [ENDPOINT, location.search]);

    // Check for new messages!!
    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    // function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    };

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;
