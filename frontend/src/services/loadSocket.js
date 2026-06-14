import { socket } from "./socket";

export const loadExperiment = (
  data
) => {
  socket.emit(
    "load-experiment",
    data
  );
};

export const registerLoadHandler = (
  callback
) => {
  socket.on(
    "experiment-loaded",
    callback
  );
};