import {
    useState,
} from "react";

import {
    login,
} from "../services/authService";

function Login({ onSwitchToRegister }) {

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
            minHeight: "100vh",
            background: "#111827",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <div
            style={{
                background: "#1F2937",
                padding: "40px",
                borderRadius: "16px",
                width: "350px",
                boxShadow:
                    "0 10px 25px rgba(0,0,0,0.3)",
            }}
        >
            <h1
                style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: "10px",
                }}
            >
                Virtual Physics Lab
            </h1>

            <h2
                style={{
                    color: "#D1D5DB",
                    textAlign: "center",
                    marginBottom: "30px",
                }}
            >
                Welcome Back
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
                style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "15px",
                    borderRadius: "8px",
                    border:
                        "1px solid #4B5563",
                    background: "#111827",
                    color: "white",
                    boxSizing:
                        "border-box",
                }}
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
                style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "20px",
                    borderRadius: "8px",
                    border:
                        "1px solid #4B5563",
                    background: "#111827",
                    color: "white",
                    boxSizing:
                        "border-box",
                }}
            />

            <button
                onClick={
                    handleLogin
                }
                style={{
                    width: "100%",
                    padding: "12px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#2563EB",
                    color: "white",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Login
            </button>

            {error && (
                <p
                    style={{
                        color: "#EF4444",
                        textAlign: "center",
                        marginTop: "15px",
                    }}
                >
                    {error}
                </p>
            )}
                    <div
            style={{
                textAlign: "center",
                marginTop: "20px",
                color: "#D1D5DB",
            }}
        >
            Don't have an account?

            <button
                onClick={
                    onSwitchToRegister
                }
                style={{
                    background: "none",
                    border: "none",
                    color: "#2563EB",
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginLeft: "5px",
                }}
            >
                Register
            </button>
        </div>
        </div>

    </div>
);
}

export default Login;