import { Box, Typography } from "@mui/material";
import React from "react";

const Facility = () => {
  const facilities = [
    {
      title: "College Environment",
      desc: "A peaceful and green campus that inspires learning, creativity, and personal growth.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    },
    {
      title: "Class Room",
      desc: "Spacious and well-equipped classrooms designed for interactive and engaging learning.",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    },
    {
      title: "Auditorium",
      desc: "A modern auditorium for seminars, cultural events, and large academic gatherings.",
      img: "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800&q=80",
    },
    {
      title: "Play Ground",
      desc: "A wide playground encouraging physical fitness, sportsmanship, and teamwork.",
      img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800&q=80",
    },
    {
      title: "Library",
      desc: "A rich collection of books and digital resources supporting academic excellence.",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    },
    {
      title: "Health Science Lab",
      desc: "Advanced laboratories for hands-on training and real-world medical practice.",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6b1c0d0f?w=800&q=80",
    },
    {
      title: "Seminar Hall",
      desc: "A professional space for workshops, presentations, and interactive sessions.",
      img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80",
    },
  ];

  return (
    <Box sx={{ background: "#0f172a", color: "#fff", marginTop:{md:'123px',xs:'60px'} }}>
      
      {/* 🔥 Banner */}
      <Box
        sx={{
          height: { xs: "220px", md: "350px" },
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />
        <Typography
          sx={{
            position: "relative",
            fontSize: { xs: "26px", md: "40px" },
            fontWeight: "bold",
          }}
        >
          Our Facilities
        </Typography>
      </Box>

      {/* 🔥 Cards Section */}
      <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 5, md: 10 } }}>
        
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {facilities.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                height: "260px",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
              }}
            >
              {/* IMAGE */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.4s ease",
                }}
                className="zoom-img"
              />

              {/* HOVER EFFECT */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  "&:hover .zoom-img": {
                    transform: "scale(1.08)", // 🔍 slight zoom
                  },
                }}
              />

              {/* OVERLAY */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
                }}
              />

              {/* TEXT */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  p: 2,
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#cbd5f5",
                    mt: 1,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Facility;