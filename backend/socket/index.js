const registerRoomHandlers = require("./roomHandlers");
const registerSpawnHandlers = require("./spawnHandlers");
const registerDeleteHandlers = require("./deleteHandlers");
const registerConstraintHandlers =require( "./constraintHandlers");
const registerDragHandlers = require("./dragHandlers");
const registerForceHandlers = require("./forceHandlers");
const registerSaveHandlers = require("./saveHandlers");
const registerLoadHandlers = require("./loadHandlers");

const registerDatabaseHandlers =
    require(
        "./databaseHandlers"
    );



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
        registerForceHandlers(
            io,
            socket
        );
        registerSaveHandlers(
            io,
            socket
        );
        registerLoadHandlers(
            io,
            socket
        );
        registerDatabaseHandlers(
            io,
            socket
        );

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
}

module.exports = initializeSocket;