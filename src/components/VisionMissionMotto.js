import { Box, Typography } from "@mui/material";
import React from "react";

const VisionMissionMotto = () => {
  const data = [
    {
      title: "Our Vision",
      content:
        "We envision empowering youth with confidence, skills, and values to face global challenges. Our focus is to nurture individuals who are not only career-ready but also socially responsible and emotionally balanced.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to provide inclusive, high-quality education and vocational training to uplift every section of society. We aim to bridge the gap between opportunity and access, enabling individuals to succeed and serve their communities.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      title: "Our Motto",
      content:
        "• Reaching the Unreached\n• Giving the Best of the Least\n• Including the Excluded",
      image:
        "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 5, md: 10 },
        px: { xs: 2, md: 10 },
        background: "#0f172a",
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
        Vision, Mission & Motto
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              minHeight: { xs: "220px", md: "300px" },
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              backgroundImage: `url(${item.image})`, // ✅ background image
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: { md: "scale(1.05)" },
              },
            }}
          >
            {/* Dark Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(255, 255, 255, 0.8)", // overlay for contrast
              }}
            />

            {/* Content */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                p: 3,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "22px" },
                  fontWeight: "bold",
                  mb: 2,
                  color: "#060114",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "15px" },
                  lineHeight: 1.8,
                  color: "#060114",
                  whiteSpace: "pre-line",
                }}
              >
                {item.content}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VisionMissionMotto;