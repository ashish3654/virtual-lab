function registerSpawnHandlers(io, socket) {
    socket.on("spawn-object", (data) => {
        console.log("Spawn object:", data);

        socket.broadcast.emit("object-spawned", data);
    });
}

module.exports = registerSpawnHandlers;