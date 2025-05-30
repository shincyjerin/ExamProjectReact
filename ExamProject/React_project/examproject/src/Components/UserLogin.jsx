import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7111/api/User_registration/User_login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        sessionStorage.setItem("userId", response.data.userId); // Store session data
        navigate("/cakedetail"); // Redirect on successful login
      }
    } catch (err) {
      if (err.response) {
        setError(
          err.response.status === 400
            ? "Invalid username or password. Please try again."
            : "Server error. Please try again later."
        );
      } else {
        setError("Network error. Please check your connection.");
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: 4,
          maxWidth: 400,
          textAlign: "center",
          borderRadius: 2,
          backgroundColor: "#363636",
          color: "white",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          required
          label="Username"
          variant="outlined"
          autoComplete="username"
          color="primary"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />

        <TextField
          fullWidth
          required
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          color="primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />

        {error && (
          <Typography color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: 3, backgroundColor: "#007bff", color: "white" }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default UserLogin;
