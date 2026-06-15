const Experiment =
    require(
        "../models/Experiment"
    );

const jwt = require(
    "jsonwebtoken"
);

function registerDatabaseHandlers(
    io,
    socket
) {
   socket.on(
        "save-to-database",
        async (data) => {

            try {

                const decoded =
                    jwt.verify(
                        data.token,
                        process.env
                            .JWT_SECRET
                    );

                const experiment =
                    new Experiment({
                        name:
                            data.name,

                        description:
                            data.description ||
                            "",

                        owner:
                            decoded.userId,

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
    async (token) => {

        try {

            const decoded =
                jwt.verify(
                    token,
                    process.env
                        .JWT_SECRET
                );

            const experiments =
                await Experiment.find(
                    {
                        owner:
                            decoded.userId,
                    },
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
    async (data) => {

        try {

            const decoded =
                jwt.verify(
                    data.token,
                    process.env
                        .JWT_SECRET
                );

            const experiment =
                await Experiment.findOne(
                    {
                        _id:
                            data.id,

                        owner:
                            decoded.userId,
                    }
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