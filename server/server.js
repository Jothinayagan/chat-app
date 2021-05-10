const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const cors = require("cors");

app.use(cors);

io.on("connection", (socket) => {
    console.log("New user has connected!");

    // Notify user has been left the session/chat
    socket.on("disconnect", () => console.log("User had left chat!"));
});

app.get("/", (_req, res) => res.send(`<h1>Server is running!!</h1>`));

server.listen(PORT, () => console.log(`Server up & listening to port ${PORT}`));
