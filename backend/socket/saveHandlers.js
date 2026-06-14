const rooms = require("./roomState");

function registerSaveHandlers(
    io,
    socket
) {
    socket.on(
        "request-save",
        () => {
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
                socket.emit(
                    "save-data",
                    rooms[roomId]
                );
            }
        }
    );
}

module.exports =
    registerSaveHandlers;