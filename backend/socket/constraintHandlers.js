const rooms = require("./roomState");

function registerConstraintHandlers(
  io,
  socket
) {
  socket.on(
    "create-constraint",
    (data) => {
      console.log(
        "Create constraint:",
        data
      );

      // Find the collaborative room
      const roomId = Array
        .from(socket.rooms)
        .find(
          (room) =>
            room !== socket.id
        );

      // Store constraint in room state
      if (
        roomId &&
        rooms[roomId]
      ) {
        rooms[
          roomId
        ].constraints.push(data);

      }

      // Broadcast only to users
      // in the same room
      if (roomId) {
        socket.to(roomId).emit(
          "constraint-created",
          data
        );
      }
    }
  );
}

module.exports =
  registerConstraintHandlers;