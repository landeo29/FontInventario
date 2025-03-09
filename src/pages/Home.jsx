import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    };

    return (
        <Container>
            <Typography variant="h4">¡Bienvenido al Dashboard!</Typography>
            <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 2 }}>
                Cerrar Sesión
            </Button>
        </Container>
    );
};

export default Home;
