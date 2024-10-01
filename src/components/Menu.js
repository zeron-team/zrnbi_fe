import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos necesarios
import './Menu.css';

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
                <li>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} /> Perfil
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <FontAwesomeIcon icon={faCogs} /> Configuraciones
                    </Link>
                </li>
                <li>
                    <a href="#logout" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Salir
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
