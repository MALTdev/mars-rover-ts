import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
})

io.on("connection", (socket) => {
    socket.on("command", (arg) => {
        socket.emit("command", arg)
    })
    socket.on("sequence", (arg) => {
        socket.emit("sequence", arg)
    })
});

httpServer.listen(3000, () => {
    console.log("listening on port " + 3000)
})
