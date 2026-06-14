import {
    useState,
    useEffect,
} from "react";

import {
    createRoom,
    joinRoom,
} from "../../services/socket";

import {
    requestSave,
    registerSaveHandler,
    saveToDatabase,
    registerDatabaseSaveSuccess,
    registerDatabaseSaveFailure,
} from "../../services/saveSocket";

import {
    loadExperiment,
} from "../../services/loadSocket";

function RoomControls() {

    const [
        roomId,
        setRoomId,
    ] = useState("");

    const [
        message,
        setMessage,
    ] = useState("");

    const [
        experimentName,
        setExperimentName,
    ] = useState("");

    const showMessage =
        (text) => {

            setMessage(text);

            setTimeout(
                () => {

                    setMessage("");

                },
                3000
            );
        };

    const handleCreateRoom =
        () => {

            createRoom(
                roomId
            );

            showMessage(
                `Room ${roomId} created`
            );
        };

    const handleJoinRoom =
        () => {

            joinRoom(
                roomId
            );

            showMessage(
                `Joined room ${roomId}`
            );
        };

    useEffect(
        () => {

            registerSaveHandler(
                (data) => {

                    if (
                        !experimentName
                    ) {
                        return;
                    }

                    saveToDatabase(
                        {
                            name:
                                experimentName,

                            objects:
                                data.objects,

                            constraints:
                                data.constraints,
                        }
                    );
                }
            );

            registerDatabaseSaveSuccess(
                () => {

                    showMessage(
                        "Experiment saved to database"
                    );

                    setExperimentName(
                        ""
                    );
                }
            );

            registerDatabaseSaveFailure(
                () => {

                    showMessage(
                        "Database save failed"
                    );
                }
            );

        },
        [experimentName]
    );

    const handleLoadExperiment =
        (event) => {

            const file =
                event.target
                    ?.files?.[0];

            if (
                !file
            ) {
                return;
            }

            const reader =
                new FileReader();

            reader.onload =
                (e) => {

                    try {

                        const data =
                            JSON.parse(
                                e.target
                                    .result
                            );

                        loadExperiment(
                            data
                        );

                        showMessage(
                            "Experiment loaded"
                        );

                    } catch {

                        showMessage(
                            "Invalid experiment file"
                        );
                    }
                };

            reader.readAsText(
                file
            );
        };

    return (
        <div
            style={{
                padding:
                    "12px 20px",

                background:
                    "#1F2937",

                borderBottom:
                    "1px solid #374151",
            }}
        >
            <div
                style={{
                    display:
                        "flex",

                    alignItems:
                        "center",

                    gap:
                        "12px",

                    flexWrap:
                        "wrap",
                }}
            >
                <div
                    style={{
                        color:
                            "white",

                        fontWeight:
                            "bold",

                        fontSize:
                            "18px",

                        marginRight:
                            "12px",
                    }}
                >
                    Virtual Physics Lab
                </div>

                <input
                    type="text"
                    placeholder="Enter Room ID"
                    value={roomId}
                    onChange={
                        (e) =>
                            setRoomId(
                                e.target
                                    .value
                            )
                    }
                    style={{
                        padding:
                            "10px 14px",

                        borderRadius:
                            "8px",

                        border:
                            "1px solid #4B5563",

                        background:
                            "#111827",

                        color:
                            "white",

                        outline:
                            "none",

                        minWidth:
                            "220px",
                    }}
                />

                <button
                    onClick={
                        handleCreateRoom
                    }
                    disabled={
                        !roomId.trim()
                    }
                    style={{
                        padding:
                            "10px 16px",

                        background:
                            "#2563EB",

                        color:
                            "white",

                        border:
                            "none",

                        borderRadius:
                            "8px",

                        cursor:
                            roomId.trim()
                                ? "pointer"
                                : "not-allowed",

                        opacity:
                            roomId.trim()
                                ? 1
                                : 0.5,
                    }}
                >
                    Create Room
                </button>

                <button
                    onClick={
                        handleJoinRoom
                    }
                    disabled={
                        !roomId.trim()
                    }
                    style={{
                        padding:
                            "10px 16px",

                        background:
                            "#059669",

                        color:
                            "white",

                        border:
                            "none",

                        borderRadius:
                            "8px",

                        cursor:
                            roomId.trim()
                                ? "pointer"
                                : "not-allowed",

                        opacity:
                            roomId.trim()
                                ? 1
                                : 0.5,
                    }}
                >
                    Join Room
                </button>

                <button
                    onClick={
                        () => {

                            const name =
                                prompt(
                                    "Enter experiment name:"
                                );

                            if (
                                !name
                            ) {
                                return;
                            }

                            setExperimentName(
                                name
                            );

                            requestSave();
                        }
                    }
                    style={{
                        padding:
                            "10px 16px",

                        background:
                            "#7C3AED",

                        color:
                            "white",

                        border:
                            "none",

                        borderRadius:
                            "8px",

                        cursor:
                            "pointer",
                    }}
                >
                    Save Experiment
                </button>

                <label
                    style={{
                        padding:
                            "10px 16px",

                        background:
                            "#EA580C",

                        color:
                            "white",

                        borderRadius:
                            "8px",

                        cursor:
                            "pointer",
                    }}
                >
                    Load Experiment

                    <input
                        type="file"
                        accept=".json"
                        onChange={
                            handleLoadExperiment
                        }
                        style={{
                            display:
                                "none",
                        }}
                    />
                </label>

            </div>

            {message && (

                <div
                    style={{
                        marginTop:
                            "10px",

                        color:
                            "#10B981",

                        fontWeight:
                            "bold",
                    }}
                >
                    {message}
                </div>

            )}

        </div>
    );
}

export default RoomControls;