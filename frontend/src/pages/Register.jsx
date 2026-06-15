import { useState } from "react";
import { register } from "../services/authService";

function Register({
    onSwitchToLogin,
}) {

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
                    Create Account
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
                        handleRegister
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#059669",
                        color: "white",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Register
                </button>

                {message && (
                    <p
                        style={{
                            color:
                                message.includes(
                                    "successful"
                                )
                                    ? "#10B981"
                                    : "#EF4444",
                            textAlign:
                                "center",
                            marginTop: "15px",
                        }}
                    >
                        {message}
                    </p>
                )}

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                        color: "#D1D5DB",
                    }}
                >
                    Already have an account?

                    <button
                        onClick={
                            onSwitchToLogin
                        }
                        style={{
                            background:
                                "none",
                            border: "none",
                            color:
                                "#2563EB",
                            cursor:
                                "pointer",
                            fontWeight:
                                "bold",
                            marginLeft:
                                "5px",
                        }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;