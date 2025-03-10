import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./pages/Home.jsx";
import Usuarios from "./pages/Usuarios.jsx";
import Productos from "./pages/Productos.jsx";
import Categorias from "./pages/Categorias.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/categorias" element={<Categorias />} />
            </Routes>
        </Router>
    );
}

export default App;
