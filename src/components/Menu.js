import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Menu.css';  // Opcional: para estilos personalizados

const Menu = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar el token de localStorage o cualquier otra información de sesión
        localStorage.removeItem('token');

        // Redirigir al usuario a la página de login
        navigate('/login');
    };

    return (
        <div className="menu">
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
                <li><Link to="/settings">Configuraciones</Link></li>
                <li><a href="#logout" onClick={handleLogout}>Salir</a></li> {/* Link de salir */}
            </ul>
        </div>
    );
};

export default Menu;
