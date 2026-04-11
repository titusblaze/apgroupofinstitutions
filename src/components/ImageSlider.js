import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ImageSlider() {

  // 🖼️ Nursing Images + Text
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
      text: "Caring is the essence of nursing ❤️",
    },
    {
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289",
      text: "Nurses are the heart of healthcare 💙",
    },
    {
      image: "https://images.unsplash.com/photo-1580281657527-47b4b1c3d1f4",
      text: "Compassion + Skill = Great Nurse 👩‍⚕️",
    },
    {
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
      text: "Your care makes a difference 🌟",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ⏱ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // ⬅️➡️ Manual Navigation
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <Box
  sx={{
    position: "relative",
    width: "100%",
    left: 0,
    margin: 0,
    height: { xs: "250px", md: "650px" },
    overflow: "hidden",
  }}
>

      {/* Slides */}
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            display: index === current ? "flex" : "none",
            height: { xs: "250px", md: "650px" },
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "0.5s",
          }}
        >

          {/* Overlay */}
          <Box
            sx={{
                position: "absolute",
                width: "100%",
                //height: "100%",
                display: "flex",
                //alignItems: "flex-end",   // bottom
                //justifyContent: "flex-start", // left
                //p: { xs: 2, md: 2 },
                bottom: {md:50, xs:40},
                left: {md:50, xs:20},
            }}
            >
            <Typography
            sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: { xs: "16px", md: "28px" },
                background: "rgba(0,0,0,0.6)",   // black transparent
                padding: "10px 15px",
                borderRadius: "8px",
                maxWidth: "400px",
                lineHeight: 1.4,
            }}
            >
            {slide.text}
            </Typography>
          </Box>
        </Box>
      ))}

      {/* Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          color: "#fff",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          color: "#fff",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 15,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setCurrent(i)}
            sx={{
              width: current === i ? 14 : 10,
              height: current === i ? 14 : 10,
              borderRadius: "50%",
              background: current === i ? "#fff" : "#bbb",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        ))}
      </Box>

    </Box>
  );
}