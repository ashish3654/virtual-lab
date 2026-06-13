function registerRoomHandlers(socket) {
    socket.on("create-room", (roomId) => {
        socket.join(roomId);

        console.log(`${socket.id} created room ${roomId}`);

        socket.emit("room-created", roomId);
    });

    socket.on("join-room", (roomId) => {
        socket.join(roomId);

        console.log(`${socket.id} joined room ${roomId}`);

        socket.emit("room-joined", roomId);
    });
}

module.exports = registerRoomHandlers;