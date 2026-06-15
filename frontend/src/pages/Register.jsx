import { useState } from "react";
import { register } from "../services/authService";

function Register() {

    const [username, setUsername] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [message, setMessage] =
        useState("");

    const handleRegister =
        async () => {

            try {

                await register(
                    username,
                    email,
                    password
                );

                setMessage(
                    "Registration successful! Please login."
                );

            } catch {

                setMessage(
                    "Registration failed."
                );

            }

        };

    return (
        <div
            style={{
                display: "flex",
                flexDirection:
                    "column",

                gap: "12px",

                maxWidth:
                    "300px",

                margin:
                    "100px auto",
            }}
        >
            <h2>
                Register
            </h2>

            <input
                type="text"

                placeholder="Username"

                value={username}

                onChange={(e) =>
                    setUsername(
                        e.target.value
                    )
                }
            />

            <input
                type="email"

                placeholder="Email"

                value={email}

                onChange={(e) =>
                    setEmail(
                        e.target.value
                    )
                }
            />

            <input
                type="password"

                placeholder="Password"

                value={password}

                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
            />

            <button
                onClick={
                    handleRegister
                }
            >
                Register
            </button>

            {message && (

                <div>
                    {message}
                </div>

            )}

        </div>
    );
}

export default Register;