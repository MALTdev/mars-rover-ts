import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { useRover } from "./useRover";

const { executeCommand, executeSequence } = useRover()

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
})

io.on("connection", (socket) => {
    socket.on("command", (arg) => {
        executeCommand(arg)
    })
    socket.on("sequence", (arg) => {
        executeSequence(arg)
    })
});

httpServer.listen(3000, () => {
    console.log("listening on port " + 3000)
})
