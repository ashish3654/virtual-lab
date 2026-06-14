const registerRoomHandlers = require("./roomHandlers");
const registerSpawnHandlers = require("./spawnHandlers");
const registerDeleteHandlers = require("./deleteHandlers");
const registerConstraintHandlers =require( "./constraintHandlers");
const registerDragHandlers = require("./dragHandlers");

function initializeSocket(io) {
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        registerRoomHandlers(socket);
        registerSpawnHandlers(
            io,
            socket
        );
        registerDeleteHandlers(
            io,
            socket
        );
        registerConstraintHandlers(
            io,
            socket
        );
        registerDragHandlers(
            io,
            socket
        );


        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
}

module.exports = initializeSocket;