import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const secciones = [
        { titulo: "Ventana Principal", ruta: "/principal" },
        { titulo: "Usuarios", ruta: "/usuarios" },
        { titulo: "Productos", ruta: "/productos" },
        { titulo: "Categorías", ruta: "/categorias" },
    ];

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                ¡Bienvenido al Panel de Administración!
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {secciones.map((seccion, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 3 }}>
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography variant="h6" gutterBottom>
                                    {seccion.titulo}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate(seccion.ruta)}
                                >
                                    Ir
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
