const registerRoomHandlers = require("./roomHandlers");
const registerSpawnHandlers = require("./spawnHandlers");
const registerDeleteHandlers = require("./deleteHandlers");

function initializeSocket(io) {
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        registerRoomHandlers(socket);
        registerSpawnHandlers(io, socket);
        registerDeleteHandlers(
            io,
            socket
        );

        
        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
}

module.exports = initializeSocket;