import { io, type Socket } from "socket.io-client";
import { useRover } from "./useRover.ts";

const { executeCommand, executeSequence } = useRover()

let socket: Socket;

export const useControl = () => {
    const initControl = () => {
        socket = io("ws://localhost:3000")

        socket.on("command", (arg) => {
            executeCommand(arg)
        })
        socket.on("sequence", (arg) => {
            executeSequence(arg)
        })
    }
    
    const emit = (message: string, arg: string) => {
        socket.emit(message, arg);
    }
    
    return { initControl, emit }
}