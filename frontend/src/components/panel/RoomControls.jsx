import { useState } from "react";
import { createRoom, joinRoom } from "../../services/socket";

function RoomControls() {
    const [roomId, setRoomId] = useState("");

    return (
        <div style={{ padding: "10px" }}>
            <input
                type="text"
                placeholder="Enter Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
            />

            <button onClick={() => createRoom(roomId)}>
                Create Room
            </button>

            <button onClick={() => joinRoom(roomId)}>
                Join Room
            </button>
        </div>
    );
}

export default RoomControls;