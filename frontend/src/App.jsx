import { useEffect, useState } from "react";

import { socket } from "./services/socket";

import PhysicsScene from "./components/scene/PhysicsScene";

import Login from "./pages/Login";

import Register from "./pages/Register";

function App() {

    const [showRegister,
        setShowRegister] =
        useState(false);

    const user =
        localStorage.getItem(
            "user"
        );

    useEffect(() => {

        socket.connect();

        return () => {

            socket.disconnect();

        };

    }, []);

    if (!user) {

        return (

            <div>

                {showRegister ? (

                    <>

                        <Register />

                        <p
                            style={{
                                textAlign:
                                    "center",
                            }}
                        >
                            Already have an account?

                            <button
                                onClick={() =>
                                    setShowRegister(
                                        false
                                    )
                                }
                            >
                                Login
                            </button>

                        </p>

                    </>

                ) : (

                    <>

                        <Login />

                        <p
                            style={{
                                textAlign:
                                    "center",
                            }}
                        >
                            Don't have an account?

                            <button
                                onClick={() =>
                                    setShowRegister(
                                        true
                                    )
                                }
                            >
                                Register
                            </button>

                        </p>

                    </>

                )}

            </div>

        );

    }

    return (

        <PhysicsScene />

    );
}

export default App;