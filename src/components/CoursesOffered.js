import React, { useRef } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CoursesOffered = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // 👉 Courses Data
  const courses = [
    {
      title: "ANM Nursing",
      image: "https://images.unsplash.com/photo-1691139601099-932c01ec198b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bnVyc2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      desc: "A foundational healthcare course focused on patient care, maternal health, and basic nursing skills.",
      path: "/anm",
    },
    {
      title: "DMLT",
      image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Learn diagnostic laboratory techniques including pathology, microbiology, and blood analysis.",
      path: "/dmlt",
    },
    {
      title: "General Duty Assistant",
      image: "https://images.unsplash.com/photo-1758691462651-611d730c5272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBhc3Npc3RhbmNlfGVufDB8fDB8fHww",
      desc: "Train to assist doctors and nurses in patient care and hospital operations effectively.",
      path: "/gda",
    },
    {
      title: "Hotel Management",
      image: "https://images.unsplash.com/photo-1540304453527-62f979142a17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Develop hospitality, food service, and management skills for the hotel industry.",
      path: "/catering",
    },
    {
      title: "Office Automation",
      image: "https://images.unsplash.com/photo-1702047143580-0f349be86369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwYXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Master MS Office, typing, internet tools, and essential administrative skills.",
      path: "/office-automation",
    },
  ];

  // 👉 Scroll Functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <Box
    sx={{
        py: 8, // increase from 6 → 8
        px: { xs: 2, md: 6 },
        background: "linear-gradient(135deg, #020617, #0f172a, #020617)",
        position: "relative",
        overflow: "hidden",
    }}
    >
      {/* Glow Background */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "rgba(59,130,246,0.2)",
          filter: "blur(120px)",
          top: 0,
          left: 0,
        }}
      />

      {/* HEADER */}
      <Grid container alignItems="center" justifyContent="space-between" mb={3}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "#fff",
            letterSpacing: 1,
          }}
        >
          Courses Offered
        </Typography>

        <Box>
          <IconButton
            onClick={scrollLeft}
            sx={{
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              mr: 1,
              "&:hover": {
                background: "#1e293b",
              },
            }}
          >
            <ArrowBack />
          </IconButton>

          <IconButton
            onClick={scrollRight}
            sx={{
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              "&:hover": {
                background: "#1e293b",
              },
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Grid>

      {/* CARDS SCROLLER */}
      <Box
        ref={scrollRef}
        sx={{
            padding:"20px 0",
            display: "flex",
            gap: 3,
            px: 1,
            py: 2,
            overflowX: "auto",
            overflowY: "visible",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
        }}
        >
        {courses.map((course, index) => (
          <Card
            key={index}
            onClick={() => navigate(course.path)}
            sx={{
              minWidth: 280,
              maxWidth: 280,
              cursor: "pointer",
              borderRadius: 4,
              overflow: "hidden",
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.05)", // glass effect
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "0.4s",
              "&:hover": {
                transform: "translateY(-10px) scale(1.03)",
                boxShadow: "0 5px 10px rgba(59,130,246,0.6)", // ✅ smoother glow
                zIndex: 2, // ✅ brings card above others
                },
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={course.image}
              alt={course.title}
            />

            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#38bdf8" }}
              >
                {course.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#cbd5f5", mt: 1 }}
              >
                {course.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CoursesOffered;