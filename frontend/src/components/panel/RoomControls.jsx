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
} from "../../services/saveSocket";



function RoomControls() {
  const [roomId, setRoomId] =
    useState("");

  const [message, setMessage] =
    useState("");

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

    const handleCreateRoom = () => {
    createRoom(roomId);

    showMessage(
      `Room ${roomId} created`
    );
  };

  const handleJoinRoom = () => {
    joinRoom(roomId);

    showMessage(
      `Joined room ${roomId}`
    );
  };

/// save

    useEffect(() => {
        registerSaveHandler(
            (data) => {
                const json =
                    JSON.stringify(
                        data,
                        null,
                        2
                    );

                const blob =
                    new Blob(
                        [json],
                        {
                            type:
                                "application/json",
                        }
                    );

                const url =
                    URL.createObjectURL(
                        blob
                    );

                const link =
                    document.createElement(
                        "a"
                    );

                link.href = url;

                link.download =
                    `experiment-${
                        roomId ||
                        "lab"
                    }.json`;

                link.click();

                URL.revokeObjectURL(
                    url
                );

                showMessage(
                    "Experiment saved"
                );
            }
        );
    }, [roomId]);


  return (
    <div
      style={{
        padding: "12px 20px",
        background: "#1F2937",
        borderBottom:
          "1px solid #374151",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            marginRight: "12px",
          }}
        >
          Virtual Physics Lab
        </div>

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
            padding: "10px 14px",
            borderRadius: "8px",
            border:
              "1px solid #4B5563",
            background:
              "#111827",
            color: "white",
            outline: "none",
            minWidth: "220px",
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
            color: "white",
            border: "none",
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
            color: "white",
            border: "none",
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
            onClick={() =>
                requestSave()
            }
            style={{
                padding:
                    "10px 16px",
                background:
                    "#7C3AED",
                color: "white",
                border: "none",
                borderRadius:
                    "8px",
                cursor: "pointer",
            }}
        >
            Save Experiment
        </button>
      </div>

      {message && (
        <div
          style={{
            marginTop: "10px",
            color: "#10B981",
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

