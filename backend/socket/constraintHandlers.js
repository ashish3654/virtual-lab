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

      socket.broadcast.emit(
        "constraint-created",
        data
      );
    }
  );
}

module.exports =
  registerConstraintHandlers;