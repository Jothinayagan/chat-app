import React, { useState } from "react";
import { ChatList } from "react-chat-elements";

import "./ChatHistory.css";

const defaultChatData = [
    {
        avatar: "https://avatars.githubusercontent.com/u/26777048?v=4",
        alt: "Reactjs",
        title: "Facebook",
        subtitle: "What are you doing?",
        date: new Date(),
        unread: 1,
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/26777048?v=4",
        alt: "Reactjs",
        title: "Facebook",
        subtitle: "What are you doing?",
        date: new Date(),
        unread: 0,
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/26777048?v=4",
        alt: "Reactjs",
        title: "Facebook",
        subtitle: "What are you doing?",
        date: new Date(),
        unread: 0,
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/26777048?v=4",
        alt: "Reactjs",
        title: "Facebook",
        subtitle: "What are you doing?",
        date: new Date(),
        unread: 0,
    },
];

function ChatHistory() {
    const [chatData, _setChatData] = useState(defaultChatData);

    return (
        <>
            <ChatList className="chat-list" dataSource={chatData} />
        </>
    );
}

export default ChatHistory;
