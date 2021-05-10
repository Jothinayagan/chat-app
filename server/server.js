const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const cors = require("cors");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./user");

app.use(cors);

io.on("connection", (socket) => {
    console.log("New user has connected!");

    // Look for someone to joining event
    socket.on("join", ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        // Emitting message event to notify the user that he joined the room!
        socket.emit("message", {
            user: "admin",
            text: `${user.name}, Welcome to the room ${user.room}`,
        });

        // Emitting message event to broadcast/notify the other users that new user has joined the chat
        socket.broadcast.to(user.room).emit("message", {
            user: "admin",
            text: `${user.name} has joined`,
        });

        socket.join(user.room);

        callback();
    });

    socket.on("sendMessage", async (message, callback) => {
        const user = await getUser(socket.id);

        io.to(user.room).emit("message", { user: user.name, text: message });

        callback();
    });

    // Notify user has been left the session/chat
    socket.on("disconnect", async () => {
        const user = await removeUser(socket.id);
        
        if (user) {
            io.to(user.room).emit("message", {
                user: "admin",
                text: `${user.name} has left!!!`,
            });
        }
    });
});

app.get("/", (_req, res) => res.send(`<h1>Server is running!!</h1>`));

server.listen(PORT, () => console.log(`Server up & listening to port ${PORT}`));
