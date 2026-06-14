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
    socket.on(
        "get-experiments",
        async () => {

            try {

                const experiments =
                    await Experiment.find(
                        {},
                        {
                            name: 1,
                            description: 1,
                        }
                    );

                socket.emit(
                    "experiments-list",
                    experiments
                );

            } catch (
                error
            ) {

                console.error(
                    "Fetching experiments failed:",
                    error
                );

            }

        }
    );
    socket.on(
        "load-from-database",
        async (id) => {

            try {

                const experiment =
                    await Experiment.findById(
                        id
                    );

                if (
                    !experiment
                ) {
                    return;
                }

                socket.emit(
                    "room-snapshot",
                    {
                        objects:
                            experiment.objects,

                        constraints:
                            experiment.constraints,
                    }
                );

            } catch (
                error
            ) {

                console.error(
                    "Loading experiment failed:",
                    error
                );

            }

        }
    );
}

module.exports =
    registerDatabaseHandlers;