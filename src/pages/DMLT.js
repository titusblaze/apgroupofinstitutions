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

const DMLT = () => {
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
          height: { xs: "250px", sm: "320px", md: "420px" },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
              "linear-gradient(135deg, rgba(6,182,212,0.85), rgba(15,23,42,0.85))",
          }}
        />

        <Box sx={{ position: "relative", color: "#fff" }}>
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "30px", md: "44px" },
              fontWeight: "bold",
            }}
          >
            Diploma in Medical Laboratory Technology
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: "13px", md: "18px" },
              fontStyle: "italic",
            }}
          >
            "Precision in Every Test, Care in Every Result"
          </Typography>
        </Box>
      </Box>

      {/* 🔷 Overview */}
      <Container sx={{ py: { xs: 3, md: 6 } }}>
        <Grid container spacing={4} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Typography fontSize={{ xs: 20, md: 28 }} fontWeight="bold" mb={2}>
              Course Overview
            </Typography>

            <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
              The Diploma in Medical Laboratory Technology (DMLT) prepares
              students for a crucial role in healthcare. Laboratory technicians
              assist doctors by performing accurate diagnostic tests, helping
              detect diseases and guide treatment decisions.
              <br /><br />
              This program blends scientific knowledge with hands-on practical
              training in modern laboratories, ensuring students are job-ready
              for hospitals, diagnostic centers, and research labs.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67"
              alt="lab"
              sx={{
                width: "100%",
                height: { xs: 220, md: "100%" },
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: 4,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 🔷 Curriculum */}
      <Box sx={{ bgcolor: "#ecfeff", py: { xs: 3, md: 6 } }}>
        <Container>
          <Typography
            textAlign="center"
            fontSize={{ xs: 20, md: 28 }}
            fontWeight="bold"
            mb={4}
          >
            Curriculum Highlights
          </Typography>

          <Grid container spacing={3}>
            {[
              "Human Anatomy & Physiology",
              "Biochemistry Fundamentals",
              "Hematology (Blood Analysis)",
              "Clinical Microbiology",
              "Clinical Chemistry",
              "Histopathology",
              "Immunology",
              "Lab Management & Quality Control",
              "Medical Ethics & Safety",
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
                      boxShadow: 5,
                    },
                  }}
                >
                  <Typography fontSize="14px">{item}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🔷 Practical Training */}
      <Container sx={{ py: { xs: 3, md: 6 } }}>
        <Grid container spacing={4} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="training"
              sx={{
                width: "100%",
                height: { xs: 220, md: "100%" },
                borderRadius: 4,
                objectFit: "cover",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontSize={{ xs: 20, md: 28 }} fontWeight="bold" mb={2}>
              Practical Training & Internship
            </Typography>

            <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
              Students gain real-world experience through hands-on lab training,
              sample handling, diagnostic testing, and report preparation.
              <br /><br />
              Clinical internships in hospitals and labs provide exposure to
              real patient samples and modern diagnostic equipment.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* 🔷 Eligibility + Duration (Dark Section) */}
      <Box sx={{ bgcolor: "#0f172a", color: "#fff", py: { xs: 3, md: 6 } }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" mb={1}>
                Eligibility
              </Typography>
              <Typography fontSize="14px">
                10+2 (Science) with Physics, Chemistry & Biology
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" mb={1}>
                Duration
              </Typography>
              <Typography fontSize="14px">
                1 to 2 Years Program
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 🔷 Careers */}
      <Container sx={{ py: { xs: 3, md: 6 } }}>
        <Typography
          textAlign="center"
          fontSize={{ xs: 20, md: 28 }}
          fontWeight="bold"
          mb={4}
        >
          Career Opportunities
        </Typography>

        <Grid container spacing={3}>
          {[
            "Medical Lab Technician",
            "Pathology Technician",
            "Clinical Research Associate",
            "Quality Control Technician",
            "Healthcare Educator",
            "Own Diagnostic Lab",
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
          bgcolor: "#06b6d4",
          color: "#fff",
          textAlign: "center",
          py: { xs: 4, md: 6 },
        }}
      >
        <Typography fontSize={{ xs: 18, md: 26 }} fontWeight="bold" mb={2}>
          Start Your Journey in Medical Science 🧪
        </Typography>

        <Button
          component={Link}
          to="/admission"
          variant="contained"
          sx={{
            background: "#0f172a",
            px: 4,
            py: 1.5,
            borderRadius: 3,
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default DMLT;