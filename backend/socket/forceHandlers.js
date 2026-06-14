function registerForceHandlers(
    io,
    socket
) {
    socket.on(
        "apply-force",
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
                    "force-applied",
                    data
                );
            }
        }
    );
}

module.exports =
    registerForceHandlers;