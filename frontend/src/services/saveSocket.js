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

        const token =
            localStorage.getItem(
                "token"
            );

        socket.emit(
            "save-to-database",
            {
                ...data,
                token,
            }
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

export const requestExperiments =
    () => {

        const token =
            localStorage.getItem(
                "token"
            );

        socket.emit(
            "get-experiments",
            token
        );

    };

export const registerExperimentsHandler =
    (callback) => {

        socket.off(
            "experiments-list"
        );

        socket.on(
            "experiments-list",
            callback
        );

    };

export const loadFromDatabase =
    (id) => {

        const token =
            localStorage.getItem(
                "token"
            );

        socket.emit(
            "load-from-database",
            {
                id,
                token,
            }
        );

    };

    export const registerDatabaseLoadFailure =
    (callback) => {

        socket.off(
            "database-load-failure"
        );

        socket.on(
            "database-load-failure",
            callback
        );

    };