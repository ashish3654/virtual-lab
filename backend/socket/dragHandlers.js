function registerDragHandlers(
    io,
    socket
) {
    socket.on(
        "drag-update",
        (data) => {
            const roomId =
                Array.from(
                    socket.rooms
                ).find(
                    (room) =>
                        room !==
                        socket.id
                );

            if (roomId) {
                socket.to(
                    roomId
                ).emit(
                    "drag-updated",
                    data
                );
            }
        }
    );
}

module.exports =
    registerDragHandlers;