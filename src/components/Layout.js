import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';  // Opcional: si quieres estilos personalizados

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Menu />
            <div className="content">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
