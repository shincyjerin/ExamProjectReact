import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminViewAuthor = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("https://localhost:7124/api/libraryMana/view_author"); // ✅ Correct API endpoint
        setAuthors(response.data);
      } catch (err) {
        console.error("Failed to fetch author details", err);
      }
    };

    fetchAuthors();
  }, []);

  const handleEditAuthor = async (author) => {
    try {
      const updatedAuthor = {
        name: "Updated Author Name", // Replace with user input
        bio: "Updated biography", // Replace with user input
      };

      await axios.put(`https://localhost:7111/api/Author/${author.id}`, updatedAuthor);
      alert("Author updated successfully!");
    } catch (error) {
      console.error("Failed to update author", error);
    }
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        ✍ Authors
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
        {authors.map((author) => (
          <Card key={author.id} sx={{ width: 280, borderRadius: 2, boxShadow: 3, backgroundColor: "white", padding: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">{author.name}</Typography>
              <Typography variant="body2" sx={{ color: "#666", marginBottom: 1 }}>
                {author.bio || "No biography available"}
              </Typography>
              <Button 
                variant="contained" 
                fullWidth 
                sx={{ marginTop: 3, backgroundColor: "#007bff" }} 
                onClick={() => handleEditAuthor(author)}
              >
                Edit Author
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default AdminViewAuthor;
