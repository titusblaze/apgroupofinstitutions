import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const NewsScroller = () => {
  const navigate = useNavigate();
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
  const blinkWhiteRedStyle = {
  color: "#fff",
  fontWeight: "bold",
  animation: "blinkWhiteRed 1s infinite",
  cursor: "pointer",
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
           "@keyframes blinkWhiteRed": {
            "0%": {
              color: "#ffffff",
              //textShadow: "0 0 5px #ffffff, 0 0 10px #ff0000",
            },
            "50%": {
              color: "#ff0000",
             // textShadow: "0 0 10px #ff0000, 0 0 20px #ffffff",
            },
            "100%": {
              color: "#ffffff",
             // textShadow: "0 0 5px #ffffff, 0 0 10px #ff0000",
            },
          },
        }}
      >
        {/* 🔁 Content 1 */}
        <Typography sx={textStyle}>
        🎓{" "}
        <span
          style={blinkWhiteRedStyle}
          onClick={() => navigate("/admission")}
        >
          <span style={{ animation: "blinkWhiteRed 1s infinite" }}>
            Admission Open 2026–2027 Batch
          </span>
        </span>
        &nbsp;&nbsp;&nbsp;
          💉 Nursing Courses Available &nbsp;&nbsp;&nbsp;
          🏥 Limited Seats – Apply Now! &nbsp;&nbsp;&nbsp;
          📞 Contact: +91 97512 70576 &nbsp;&nbsp;&nbsp;
        </Typography>

        {/* 🔁 Content 2 (duplicate for seamless loop) */}
        <Typography sx={textStyle}>
          🎓{" "}
          <span
            style={blinkWhiteRedStyle}
            onClick={() => navigate("/admission")}
          >
            <span style={{ animation: "blinkWhiteRed 1s infinite" }}>
              Admission Open 2026–2027 Batch
            </span>
          </span>
          &nbsp;&nbsp;&nbsp;
          💉 Nursing Courses Available &nbsp;&nbsp;&nbsp;
          🏥 Limited Seats – Apply Now! &nbsp;&nbsp;&nbsp;
          📞 Contact: +91 97512 70576 &nbsp;&nbsp;&nbsp;
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsScroller;