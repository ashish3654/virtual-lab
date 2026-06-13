import { socket } from "./socket";

export function emitSpawnObject(data) {
    socket.emit("spawn-object", data);
}

export function emitDeleteObject(id) {
    socket.emit("delete-object", {
        id,
    });
}