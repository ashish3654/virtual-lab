const rooms = require("./roomState");

function registerSpawnHandlers(io, socket) {
    socket.on("spawn-object", (data) => {
        console.log("Spawn object:", data);

        // Find the collaborative room
        const roomId = Array
            .from(socket.rooms)
            .find(
                (room) =>
                    room !== socket.id
            );

        // Store object in room state
        if (
            roomId &&
            rooms[roomId]
        ) {
             rooms[roomId].objects.push(data);
        }

        // Broadcast only to users in the same room
        socket.to(roomId).emit(
            "object-spawned",
            data
        );
    });
}

module.exports =
    registerSpawnHandlers;