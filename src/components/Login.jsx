import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Alert, Paper, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 🟢 Estilos personalizados 🟢
const StyledContainer = styled(Container)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
});

const StyledPaper = styled(Paper)({
    padding: "30px",
    maxWidth: "400px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    textAlign: "center",
});

const StyledButton = styled(Button)({
    backgroundColor: "#1976d2",
    "&:hover": {
        backgroundColor: "#1565c0",
    },
    borderRadius: "8px",
    marginTop: "10px",
});

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5016/api/auth/login", { username, password });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            navigate("/home");
        } catch {
            setError("Credenciales inválidas. ¡Intenta de nuevo!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <StyledContainer>
            <StyledPaper elevation={3}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
                    Iniciar Sesión
                </Typography>
                {error && <Alert severity="error" sx={{ marginBottom: "10px" }}>{error}</Alert>}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Usuario"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                    <StyledButton
                        variant="contained"
                        onClick={handleLogin}
                        fullWidth
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Entrar"}
                    </StyledButton>
                </Box>
            </StyledPaper>
        </StyledContainer>
    );
};

export default Login;
