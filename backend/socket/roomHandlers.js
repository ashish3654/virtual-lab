const rooms = require("./roomState");

function registerRoomHandlers(socket) {
   socket.on("create-room", (roomId) => {
        socket.join(roomId);

        if (!rooms[roomId]) {
            rooms[roomId] = {
                objects: [],
                constraints: [],
            };
        }

        console.log(
            `${socket.id} created room ${roomId}`
        );
    });

   socket.on("join-room", (roomId) => {
        socket.join(roomId);

        if (!rooms[roomId]) {
            rooms[roomId] = {
                objects: [],
                constraints: [],
            };
        }

        console.log(
            `${socket.id} joined room ${roomId}`
        );
        console.log(
    "Sending snapshot:",
    rooms[roomId]
);
        socket.emit(
            "room-snapshot",
            rooms[roomId]
        );

        socket.emit(
            "room-joined",
            roomId
        );
    });
}

module.exports = registerRoomHandlers;