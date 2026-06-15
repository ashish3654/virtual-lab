import {
    useState,
} from "react";

import {
    login,
} from "../services/authService";

function Login() {

    const [
        email,
        setEmail,
    ] = useState("");

    const [
        password,
        setPassword,
    ] = useState("");

    const [
        error,
        setError,
    ] = useState("");

    const handleLogin =
        async () => {

            try {

                const data =
                    await login(
                        email,
                        password
                    );

                localStorage.setItem(
                    "token",
                    data.token
                );

                localStorage.setItem(
                    "user",
                    JSON.stringify(
                        data.user
                    )
                );

                window.location.reload();

            } catch {

                setError(
                    "Invalid credentials"
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
                Login
            </h2>

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
                    handleLogin
                }
            >
                Login
            </button>

            {error && (

                <div>
                    {error}
                </div>

            )}

        </div>
    );
}

export default Login;