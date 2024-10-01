import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Archivo de estilos para el login

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Simula el login
            localStorage.setItem('token', 'dummy_token');
            navigate('/dashboard');
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <img src="/images/Z_logo_vertical.png" alt="Logo" className="login-logo"/>

                    <h2>Bienvenidos al sistema de BI</h2>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Clave</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="login-button">Ingresar</button>
                </form>

                <div className="forgot-password">
                    <a href="/forgot-password">Olvidé mi contraseña</a>
                </div>

                <div className="login-footer">
                    <p>© 2024 BI SaaS. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
