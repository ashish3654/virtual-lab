import { socket } from "./socket";

export const emitApplyForce = (
  data
) => {
  socket.emit(
    "apply-force",
    data
  );
};

export const registerForceHandler = (
  callback
) => {
  socket.on(
    "force-applied",
    callback
  );
};