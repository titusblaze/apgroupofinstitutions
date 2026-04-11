import React from "react";
import { Box, Typography } from "@mui/material";
import "../components/Loader.css" // 👈 animation file
import logo from "../components/images/logo512.png";

const Loader = () => {
  return (
    <Box className="loader-container">

      {/* 🎓 Logo */}
      <img 
      src={logo} 
      alt="logo" 
      width={300}
      className="logo-float" />

      {/* ✨ Tagline */}
      <Typography className="tagline">
        Empowering Education
      </Typography>

      {/* ⚡ Loading Dots */}
      <Box className="dots">
        <span></span>
        <span></span>
        <span></span>
      </Box>

    </Box>
  );
};

export default Loader;