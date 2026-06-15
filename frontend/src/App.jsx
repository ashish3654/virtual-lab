import { useEffect, useState } from "react";

import { socket } from "./services/socket";

import PhysicsScene from "./components/scene/PhysicsScene";

import Login from "./pages/Login";

import Register from "./pages/Register";

import RoomSelection from "./pages/RoomSelection";

function App() {

    const [
        showRegister,
        setShowRegister,
    ] = useState(false);

    const user =
        localStorage.getItem(
            "user"
        );

    const roomId =
        localStorage.getItem(
            "roomId"
        );

    const [
        hasRoom,
        setHasRoom,
    ] = useState(
        !!roomId
    );

    useEffect(() => {

        socket.connect();

        return () => {

            socket.disconnect();

        };

    }, []);

    // User not logged in
    if (!user) {

        return (

            <div>

                {showRegister ? (

                    <Register
                        onSwitchToLogin={() =>
                            setShowRegister(
                                false
                            )
                        }
                    />

                ) : (

                    <Login
                        onSwitchToRegister={() =>
                            setShowRegister(
                                true
                            )
                        }
                    />

                )}

            </div>

        );

    }

    // User logged in but hasn't joined a room
    if (!hasRoom) {

        return (

            <RoomSelection
                onRoomSelected={() =>
                    setHasRoom(
                        true
                    )
                }
            />

        );

    }

    // User logged in and has a room
    return (

        <PhysicsScene />

    );

}

export default App;