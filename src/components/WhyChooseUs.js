import { Box, Typography } from "@mui/material";
import React from "react";

const WhyChooseUs = () => {
  const data = [
    {
      title: "Well Ventilated Classrooms",
      desc: "Experience a refreshing and comfortable learning environment with spacious, well-ventilated classrooms designed to enhance focus and productivity.",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
    },
    {
      title: "Experienced Faculties",
      desc: "Learn from highly qualified and dedicated faculty members who provide personalized guidance and industry-oriented knowledge.",
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80",
    },
    {
      title: "Guaranteed Placement",
      desc: "Our strong placement cell connects students with top recruiters, ensuring career opportunities and a successful professional journey.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
    },
    {
      title: "Effective Courses",
      desc: "Industry-relevant courses designed to build practical skills, confidence, and real-world problem-solving abilities.",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80",
    },
    // 🔥 Extra Content
    {
      title: "Modern Infrastructure",
      desc: "State-of-the-art facilities and advanced labs to support practical learning and innovation.",
      img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=600&q=80",
    },
    {
      title: "Holistic Development",
      desc: "We focus on academic excellence along with personality development, communication skills, and leadership qualities.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 5, md: 10 },
        px: { xs: 2, md: 10 },
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "24px", md: "36px" },
          fontWeight: "bold",
          color: "#fff",
          mb: 6,
        }}
      >
        Why Choose Us
      </Typography>

      {/* Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" }, // ✅ responsive cards
              borderRadius: "16px",
              overflow: "hidden",
              background: "#111827",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            {/* Image */}
            <Box
              sx={{
                height: "180px",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content */}
            <Box sx={{ p: 3 }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#fff",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#cbd5f5",
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhyChooseUs;