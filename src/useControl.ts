import { io, type Socket } from "socket.io-client";

let socket: Socket;

export const useControl = () => {
    
    const initControl = () => {
        socket = io("ws://localhost:3000")
    }
    
    const emit = (message: string, arg: string) => {
        socket.emit(message, arg);
    }
    
    return { initControl, emit }
}