import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000";

export const socket = io(SOCKET_URL, {
    autoConnect: false,
});

export const createRoom = (roomId) => {
    socket.emit("create-room", roomId);
};

export const joinRoom = (roomId) => {
    socket.emit("join-room", roomId);
};