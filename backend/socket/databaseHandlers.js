const Experiment =
    require(
        "../models/Experiment"
    );

function registerDatabaseHandlers(
    io,
    socket
) {
    socket.on(
        "save-to-database",
        async (data) => {
            try {
                const experiment =
                    new Experiment({
                        name:
                            data.name,

                        description:
                            data.description ||
                            "",

                        objects:
                            data.objects,

                        constraints:
                            data.constraints,
                    });

                await experiment.save();

                socket.emit(
                    "database-save-success"
                );
            } catch (
                error
            ) {
                console.error(
                    "Database save failed:",
                    error
                );

                socket.emit(
                    "database-save-failure"
                );
            }
        }
    );
}

module.exports =
    registerDatabaseHandlers;