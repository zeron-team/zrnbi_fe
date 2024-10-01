import axios from 'axios';

const API_URL = "http://localhost:8000/auth";

const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("token");
};

const getCurrentUser = () => {
    return localStorage.getItem("token");
};

export default {
    login,
    logout,
    getCurrentUser,
};
