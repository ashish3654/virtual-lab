import { useState } from "react";

import {
    createRoom,
    joinRoom,
} from "../services/socket";

function RoomSelection({
    onRoomSelected,
}) {

    const [
        roomId,
        setRoomId,
    ] = useState("");

    const handleCreate =
        () => {

            createRoom(
                roomId
            );

            localStorage.setItem(
                "roomId",
                roomId
            );

            onRoomSelected();

        };

    const handleJoin =
        () => {

            joinRoom(
                roomId
            );

            localStorage.setItem(
                "roomId",
                roomId
            );

            onRoomSelected();

        };

    return (

        <div
            style={{
                minHeight:
                    "100vh",

                background:
                    "#111827",

                display:
                    "flex",

                justifyContent:
                    "center",

                alignItems:
                    "center",
            }}
        >

            <div
                style={{
                    background:
                        "#1F2937",

                    padding:
                        "40px",

                    borderRadius:
                        "16px",

                    width:
                        "350px",

                    boxShadow:
                        "0 10px 25px rgba(0,0,0,0.3)",
                }}
            >

                <h1
                    style={{
                        color:
                            "white",

                        textAlign:
                            "center",

                        marginBottom:
                            "30px",
                    }}
                >
                    Select a Room
                </h1>

                <input
                    type="text"

                    placeholder="Enter Room ID"

                    value={roomId}

                    onChange={(e) =>
                        setRoomId(
                            e.target.value
                        )
                    }

                    style={{
                        width:
                            "100%",

                        padding:
                            "12px",

                        borderRadius:
                            "8px",

                        border:
                            "1px solid #4B5563",

                        background:
                            "#111827",

                        color:
                            "white",

                        boxSizing:
                            "border-box",
                    }}
                />

                <button
                    onClick={
                        handleCreate
                    }

                    disabled={
                        !roomId.trim()
                    }

                    style={{
                        width:
                            "100%",

                        marginTop:
                            "20px",

                        padding:
                            "12px",

                        border:
                            "none",

                        borderRadius:
                            "8px",

                        background:
                            "#2563EB",

                        color:
                            "white",

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
                        handleJoin
                    }

                    disabled={
                        !roomId.trim()
                    }

                    style={{
                        width:
                            "100%",

                        marginTop:
                            "12px",

                        padding:
                            "12px",

                        border:
                            "none",

                        borderRadius:
                            "8px",

                        background:
                            "#059669",

                        color:
                            "white",

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

            </div>

        </div>

    );

}

export default RoomSelection;