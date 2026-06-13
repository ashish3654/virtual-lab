function registerDeleteHandlers(io, socket) {
    socket.on("delete-object", (data) => {
        console.log("Delete object:", data);

        socket.broadcast.emit(
            "object-deleted",
            data
        );
    });
}

module.exports =
    registerDeleteHandlers;