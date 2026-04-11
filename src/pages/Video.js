import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const videoData = [
  {
    id: 1,
    title: "Campus Tour",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 2,
    title: "Student Life",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 3,
    title: "Lab Training",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    id: 4,
    title: "Placement Success",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    id: 5,
    title: "Classroom Session",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 6,
    title: "Hostel Life",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 7,
    title: "Sports Events",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    id: 8,
    title: "Cultural Fest",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    id: 9,
    title: "Workshops",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 10,
    title: "Convocation Day",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
];

const Video = () => {
  return (
    <Box sx={{ background: "#0f172a", minHeight: "100vh", color: "#fff", marginTop: { xs: "60px", md: "123px" }  }}>
      
      {/* 🔥 Banner */}
      <Box
        sx={{
          height: { xs: "250px", md: "400px" },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.6)",
          }}
        />
        <Typography
          variant="h3"
          sx={{
            zIndex: 1,
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(90deg,#38bdf8,#22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our College Videos 🎬
        </Typography>
      </Box>

      {/* 🎥 Video Grid */}
      <Box sx={{ p: { xs: 2, md: 5 } }}>
        <Grid container spacing={4}>
          {videoData.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              
              <Card
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                
                {/* YouTube iframe */}
                <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </Box>

                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#38bdf8",
                    }}
                  >
                    {video.title}
                  </Typography>
                </CardContent>

              </Card>

            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Video;