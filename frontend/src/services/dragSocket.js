import { socket }
from "./socket";

export const emitDragUpdate = (
  data
) => {
  socket.emit(
    "drag-update",
    data
  );
};

export const registerDragHandler = (
  callback
) => {
  socket.on(
    "drag-updated",
    callback
  );
};