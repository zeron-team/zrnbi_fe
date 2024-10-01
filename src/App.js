import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta independiente para Login */}
                <Route path="/login" element={<Login />} />

                {/* Páginas envueltas en el Layout */}
                <Route path="/" element={<Layout><Dashboard /></Layout>} />
                <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
                <Route path="/profile" element={<Layout><Profile /></Layout>} />
                <Route path="/settings" element={<Layout><Settings /></Layout>} />
            </Routes>
        </Router>
    );
}

export default App;
