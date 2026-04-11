import { Box, Typography } from "@mui/material";
import React from "react";
import person1 from "../components/images/chairman1.jpg"; // change image
import person2 from "../components/images/chairman2.jpg"; // change image

const ChairmanSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 10 },
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "26px", md: "36px" },
          fontWeight: "bold",
          mb: 6,
          letterSpacing: 1,
        }}
      >
        About Our Chairman
      </Typography>

      {/* Main Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* LEFT IMAGE */}
        <Box
          sx={{
            flex: 1,
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          <Box
            component="img"
            src={person1}
            alt="Chairman 1"
            sx={{
              width: "100%",
              height: { xs: "250px", md: "350px" },
              objectFit: "cover",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.08)", // 🔥 zoom effect
              },
            }}
          />
        </Box>

        {/* CENTER CONTENT */}
        <Box sx={{ flex: 1.5, textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.8,
              color: "#ddd",
            }}
          >
            Dr. Ajith Kumar and Dr. Pradeep are shining examples of how
            determination and perseverance can elevate individuals from humble
            beginnings to positions of great leadership. Through unwavering hard
            work, dedication, and commitment to a noble cause, they have built a
            strong foundation for excellence in education.
            <br /><br />
            Their visionary leadership and administrative expertise have
            transformed the institution into a center of learning and growth.
            They continue to inspire students and faculty alike, fostering an
            environment that encourages innovation, discipline, and success.
          </Typography>

          {/* EXTRA CONTENT */}
          <Typography
            sx={{
              mt: 3,
              fontSize: "14px",
              color: "#bbb",
              fontStyle: "italic",
            }}
          >
            "True leadership is not about position, but about vision,
            responsibility, and the ability to inspire others."
          </Typography>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flex: 1,
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          <Box
            component="img"
            src={person2}
            alt="Chairman 2"
            sx={{
              width: "100%",
              height: { xs: "250px", md: "350px" },
              objectFit: "cover",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChairmanSection;