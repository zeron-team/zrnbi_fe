// src/components/PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');  // Obtén el token de autenticación
    return (
        <Route
            {...rest}
            render={(props) =>
                token ? <Component {...props} /> : <Redirect to="/login" />  // Si hay token, muestra la ruta protegida, si no, redirige al login
            }
        />
    );
};

export default PrivateRoute;
