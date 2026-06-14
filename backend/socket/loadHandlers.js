const rooms = require("./roomState");

function registerLoadHandlers(
    io,
    socket
) {
    socket.on(
        "load-experiment",
        
        (data) => {
            const roomId =
                Array.from(
                    socket.rooms
                ).find(
                    (room) =>
                        room !==
                        socket.id
                );

            if (
                roomId &&
                rooms[roomId]
            ) {
                rooms[roomId] = data;


                io.to(roomId).emit(
                    "room-snapshot",
                    data
                );
            }
        }
    );
}

module.exports =
    registerLoadHandlers;