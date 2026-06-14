import { socket }
from "./socket";

export const requestSave =
    () => {
        socket.emit(
            "request-save"
        );
    };

export const registerSaveHandler =
    (callback) => {
        socket.on(
            "save-data",
            callback
        );
    };