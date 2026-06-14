const rooms = require("./roomState");

function registerDeleteHandlers(io, socket) {
    socket.on("delete-object", (data) => {
        console.log("Delete object:", data);

        // Find the collaborative room
        const roomId = Array
            .from(socket.rooms)
            .find(
                (room) =>
                    room !== socket.id
            );

        // Remove object from room state
        if (
            roomId &&
            rooms[roomId]
        ) {
            rooms[roomId].objects =
                rooms[
                    roomId
                ].objects.filter(
                    (object) =>
                        object.id !==
                        data.id
                );
             
        }



        // Broadcast to other users
        if (roomId) {
            socket.to(roomId).emit(
                "object-deleted",
                data
            );
        }
    });
}

module.exports =
    registerDeleteHandlers;