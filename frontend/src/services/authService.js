import axios from "axios";

const API =
    "http://localhost:5000/api/auth";

export const register =
    async (
        username,
        email,
        password
    ) => {

        const response =
            await axios.post(
                `${API}/register`,
                {
                    username,
                    email,
                    password,
                }
            );

        return response.data;
    };

export const login =
    async (
        email,
        password
    ) => {

        const response =
            await axios.post(
                `${API}/login`,
                {
                    email,
                    password,
                }
            );

        return response.data;
    };