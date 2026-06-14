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

        socket.off(
            "save-data"
        );

        socket.on(
            "save-data",
            callback
        );

    };

export const saveToDatabase =
    (data) => {
        socket.emit(
            "save-to-database",
            data
        );
    };

export const registerDatabaseSaveSuccess =
    (callback) => {

        socket.off(
            "database-save-success"
        );

        socket.on(
            "database-save-success",
            callback
        );

    };

export const registerDatabaseSaveFailure =
    (callback) => {

        socket.off(
            "database-save-failure"
        );

        socket.on(
            "database-save-failure",
            callback
        );

    };