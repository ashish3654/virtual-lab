const registerRoomHandlers = require("./roomHandlers");
const registerSpawnHandlers = require("./spawnHandlers");

function initializeSocket(io) {
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        registerRoomHandlers(socket);
        registerSpawnHandlers(io, socket);

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
}

module.exports = initializeSocket;