import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const AddAuthor = () => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const [authorData, setAuthorData] = useState({
    name: "",
    bio: "",
  });

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddAuthor = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7124/api/libraryMana/ADD_Author", // ✅ Replace with actual API endpoint
        authorData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201) {
        navigate("/authors"); // ✅ Redirect to authors page after success
      }
    } catch (error) {
      console.error("Error adding author:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Paper elevation={6} sx={{ padding: 4, maxWidth: 400, textAlign: "center", borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Add New Author
        </Typography>

        <TextField
          fullWidth
          required
          label="Author Name"
          name="name"
          value={authorData.name}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Bio (Optional)"
          name="bio"
          value={authorData.bio}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />

        <Button variant="contained" fullWidth sx={{ marginTop: 3, backgroundColor: "#007bff" }} onClick={handleAddAuthor}>
          Add Author
        </Button>
      </Paper>
    </Box>
  );
};

export default AddAuthor;
