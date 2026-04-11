import { Box, Typography } from "@mui/material";
import React from "react";
import aboutbanner from "../components/images/about-banner.jpg";

const AboutBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "200px", md: "300px" },
        position: "relative",
        backgroundImage: `url(${aboutbanner})`, // 🔁 change your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          top: 0,
          left: 0,
        }}
      />

      {/* Text */}
      <Typography
        sx={{
          position: "relative",
          color: "#fff",
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        About Us
      </Typography>
    </Box>
  );
};

export default AboutBanner;