import React from "react";
import "./MessageArea.css";
// import MessageBoxComponent from "./MessageBox";
import { MessageList } from "react-chat-elements";

function MessageArea() {
    return (
        <MessageList
            className="message-list"
            lockable={true}
            toBottomHeight={"100%"}
            dataSource={[
                {
                    position: "right",
                    type: "text",
                    text: "Hi! Please check your inbox. I have sent an invoice copy of your purchase!",
                    date: new Date(),
                },
                {
                    position: "left",
                    type: "text",
                    text: "Yooooo! Thanks for forwarding the invoice. I could file the invoice for GST!",
                    date: new Date(),
                },
                {
                    position: "right",
                    type: "text",
                    text: "Welcome. Please give the feedback for your purchase.",
                    date: new Date(),
                },
            ]}
        />
    );
}

export default MessageArea;
