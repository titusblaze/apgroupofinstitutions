import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const OficeAutomation = () => {
  return (
    <Box 
      sx={{ 
        width: "100%", 
        overflowX: "hidden",
        marginTop: { xs: "60px", md: "123px" },
         }}>
      
      {/* 🔷 Banner */}
      <Box
        sx={{
          height: { xs: "240px", sm: "300px", md: "420px" },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(15,23,42,0.85), rgba(30,41,59,0.85))",
          }}
        />

        <Box sx={{ position: "relative", color: "#fff" }}>
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "30px", md: "44px" },
              fontWeight: "bold",
            }}
          >
            Diploma in Office Automation
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: "13px", sm: "15px", md: "18px" },
              fontStyle: "italic",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Empower Your Career with Essential Digital Skills
          </Typography>
        </Box>
      </Box>

      {/* 🔷 Intro Section */}
      <Container sx={{ py: { xs: 3, md: 6 } }}>
        <Grid container spacing={4} alignItems="center">
          
          {/* Text */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "28px" },
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Course Overview
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#555",
                lineHeight: 1.7,
              }}
            >
              The Diploma in Office Automation (DOA) is a one-year program
              designed to build strong digital and administrative skills.
              Students learn how to handle office tasks efficiently using
              modern tools, improve productivity, and manage communication
              professionally.
            </Typography>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="office"
              sx={{
                width: "100%",
                height: { xs: "220px", md: "100%" },
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: 4,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 🔷 Course Content */}
      <Box sx={{ bgcolor: "#f1f5f9", py: { xs: 3, md: 6 } }}>
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "20px", md: "28px" },
              fontWeight: "bold",
              mb: 4,
            }}
          >
            What You Will Learn
          </Typography>

          <Grid container spacing={3}>
            {[
              "MS Word – Professional Documents",
              "MS Excel – Data & Reports",
              "MS PowerPoint – Presentations",
              "Internet & Email Communication",
              "File Management",
              "Data Entry Skills",
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    textAlign: "center",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography fontSize="15px">{item}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🔷 Highlights */}
      <Container sx={{ py: { xs: 3, md: 6 } }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "20px", md: "28px" },
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Key Highlights
        </Typography>

        <Grid container spacing={3}>
          {[
            "Practical Training",
            "Industry Curriculum",
            "Lab Sessions",
            "Productivity Focus",
            "Beginner Friendly",
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography>✔ {item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 🔷 Eligibility + Duration */}
      <Box sx={{ bgcolor: "#0f172a", color: "#fff", py: { xs: 3, md: 6 } }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" mb={1}>
                Eligibility
              </Typography>
              <Typography fontSize="14px">
                8th / 10th / 12th Pass – No prior computer knowledge required
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" mb={1}>
                Duration
              </Typography>
              <Typography fontSize="14px">
                1 Year Diploma Program
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 🔷 Careers */}
      <Container sx={{ py: { xs: 3, md: 6 } }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "20px", md: "28px" },
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Career Opportunities
        </Typography>

        <Grid container spacing={3}>
          {[
            "Office Assistant",
            "Data Entry Operator",
            "Computer Operator",
            "Administrative Assistant",
            "Front Office Executive",
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography>{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 🔷 CTA */}
      <Box
        sx={{
          bgcolor: "#1e293b",
          color: "#fff",
          textAlign: "center",
          py: { xs: 4, md: 6 },
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "26px" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Start Your Career Today 🚀
        </Typography>

        <Typography sx={{ mb: 3, fontSize: "14px" }}>
          Gain the skills, confidence, and knowledge needed to succeed in any
          modern office environment.
        </Typography>

        <Button
          variant="contained"
          component={Link} 
          to="/admission"
          sx={{
            background: "linear-gradient(90deg, #38bdf8, #6366f1)",
            px: 4,
            py: 1.5,
            borderRadius: 3,
          }}
        >
          Enroll Now
        </Button>
      </Box>
    </Box>
  );
};

export default OficeAutomation;