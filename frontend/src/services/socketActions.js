import { socket } from "./socket";

export function emitSpawnObject(data) {
    socket.emit("spawn-object", data);
}