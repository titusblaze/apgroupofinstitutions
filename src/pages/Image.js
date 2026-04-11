import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

const bannerImage =
  "https://images.unsplash.com/photo-1725870953863-4ad4db0acfc2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Image = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ 
      display:'flex', 
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      background: "#0f172a", 
      color: "#fff", 
      marginTop:{md:'123px',xs:'60px'} 
      }}>
    <Box
      sx={{
        width: "100%",
        height: { xs: "60vh", md: "80vh" },
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "48px" },
          }}
        >
          Welcome to Nursing College
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: "14px", md: "18px" },
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Empowering compassionate healthcare professionals with excellence in
          education and clinical practice.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: "16px",
            borderRadius: "30px",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#0d47a1",
            },
          }}
          onClick={() => navigate("/admission")}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
    <ImageGallery />
    </Box>
  );
};

export default Image;