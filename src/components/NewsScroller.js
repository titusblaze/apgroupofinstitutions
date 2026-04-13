import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const NewsScroller = () => {
  const [hideOffset, setHideOffset] = useState(0);
  const [lastScroll, setLastScroll] = useState(0);

  // 🔥 SCROLL HIDE EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (Math.abs(currentScroll - lastScroll) > 10) {
        if (currentScroll > lastScroll) {
          setHideOffset(-60); // ⬇️ hide
        } else {
          setHideOffset(0); // ⬆️ show
        }
        setLastScroll(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const textStyle = {
    display: "inline-block",
    fontSize: { xs: "14px", md: "18px" },
    fontWeight: 600,
    fontStyle: "italic",
    pr: 5,
    color: "#ffffff",
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: 60, md: 125 },
        width: "100%",
        height: { xs: "40px", md: "50px" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        transform: {
          md: `translateY(${hideOffset}px)`,
          xs: "none",
        },
        transition: "transform 0.3s ease",
        zIndex: 10,

        // 🔥 Fade edges (modern look)
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "scroll-left 20s linear infinite",

          "&:hover": {
            animationPlayState: "paused",
            cursor: "pointer",
          },

          "@keyframes scroll-left": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: "translateX(-50%)",
            },
          },
        }}
      >
        {/* 🔁 Content 1 */}
        <Typography sx={textStyle}>
          🎓 Admission Open 2026–2027 Batch &nbsp;&nbsp;&nbsp;
          💉 Nursing Courses Available &nbsp;&nbsp;&nbsp;
          🏥 Limited Seats – Apply Now! &nbsp;&nbsp;&nbsp;
          📞 Contact: +91 97512 70576 &nbsp;&nbsp;&nbsp;
        </Typography>

        {/* 🔁 Content 2 (duplicate for seamless loop) */}
        <Typography sx={textStyle}>
          🎓 Admission Open 2026–2027 Batch &nbsp;&nbsp;&nbsp;
          💉 Nursing Courses Available &nbsp;&nbsp;&nbsp;
          🏥 Limited Seats – Apply Now! &nbsp;&nbsp;&nbsp;
          📞 Contact: +91 97512 70576 &nbsp;&nbsp;&nbsp;
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsScroller;