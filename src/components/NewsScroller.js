import { Box, Typography } from "@mui/material";
import React from "react";

// 🔥 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (Math.abs(currentScroll - lastScroll) > 10) {
        if (currentScroll > lastScroll) {
          setHideOffset(-60); // ⬇️ move up
        } else {
          setHideOffset(0); // ⬆️ move down
        }
        setLastScroll(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

const NewsScroller = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: 60, md: 125 },
        width: "100%",
        height: { xs: "40px", md: "50px" },
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        transform: {
          md: `translateY(${hideOffset}px)`,
          xs: "none",
        },
        transition: "transform 0.3s ease",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "scroll-left 30s linear infinite",

          // 🔥 Pause on hover
          "&:hover": {
            animationPlayState: "paused",
            cursor: "pointer",
          },

          "& > *": {
            flexShrink: 0,
          },

          // ✅ ADD THIS
          "@keyframes scroll-left": {
            "0%": {
              transform: "translateX(100%)",
            },
            "100%": {
              transform: "translateX(-100%)",
            },
          },
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: 600,
            fontStyle: "italic",
            pr: 5,
            color: "#ffffff",
          }}
        >
          🎓 Admission Open 2026–2027 Batch &nbsp;&nbsp;&nbsp;
          💉 Nursing Courses Available &nbsp;&nbsp;&nbsp;
          🏥 Limited Seats – Apply Now! &nbsp;&nbsp;&nbsp;
          📞 Contact: +91 97512 70576 &nbsp;&nbsp;&nbsp;
          {/* Duplicate */}
            🎓 Admission Open 2026–2027 Batch &nbsp;&nbsp;&nbsp;   
            💉 Nursing Courses Available &nbsp;&nbsp;&nbsp;
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsScroller;