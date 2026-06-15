const mongoose = require(
    "mongoose"
);

const experimentSchema =
    new mongoose.Schema(
        {
            name: {
                type: String,
                required: true,
            },

            description: {
                type: String,
                default: "",
            },

            owner: {
                type:
                    mongoose.Schema.Types.ObjectId,

                ref: "User",

                required: true,
            },

            objects: {
                type: Array,
                default: [],
            },

            constraints: {
                type: Array,
                default: [],
            },
        },
        {
            timestamps: true,
        }
    );

module.exports =
    mongoose.model(
        "Experiment",
        experimentSchema
    );