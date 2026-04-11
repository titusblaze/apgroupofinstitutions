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

const ANM = () => {
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
            "url('https://images.unsplash.com/photo-1584515933487-779824d29309')",
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
              "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(2,132,199,0.7))",
          }}
        />

        <Box sx={{ position: "relative", color: "#fff" }}>
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "30px", md: "44px" },
              fontWeight: "bold",
            }}
          >
            Auxiliary Nurse & Midwifery (ANM)
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: "13px", md: "18px" },
              fontStyle: "italic",
            }}
          >
            "Care, Compassion & Commitment to Saving Lives"
          </Typography>
        </Box>
      </Box>

      {/* 🔷 Course Overview */}
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

            <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
              The Auxiliary Nurse and Midwifery (ANM) course is a vital healthcare
              program that focuses on patient care, maternal health, and community
              health services. It prepares students to support individuals,
              families, and communities in achieving and maintaining optimal
              health from birth to old age.
              <br /><br />
              This two-year program provides practical and theoretical knowledge
              in nursing care, midwifery, and health awareness, opening doors to
              meaningful careers in the healthcare sector.
            </Typography>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://plus.unsplash.com/premium_photo-1665203568927-bf0e58ee3d20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nursing"
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

      {/* 🔷 Eligibility Section (Dark Contrast) */}
      <Box sx={{ bgcolor: "#0f172a", color: "#fff", py: { xs: 3, md: 6 } }}>
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "20px", md: "28px" },
              fontWeight: "bold",
              mb: 4,
            }}
          >
            Eligibility & Admission
          </Typography>

          <Grid container spacing={3}>
            {[
              "10+2 Pass with minimum 45% marks",
              "Medical fitness certificate required",
              "Only Female Candidates Eligible",
              "Minimum Age: 17 Years",
              "Maximum Age: 35 Years",
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                  }}
                >
                  <Typography fontSize="14px">✔ {item}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🔷 Scope Section */}
      <Container sx={{ py: { xs: 3, md: 6 } }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "20px", md: "28px" },
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Scope & Career Opportunities
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
            mb: 4,
            color: "#555",
          }}
        >
          ANM is the first step into the nursing profession in India. It offers
          excellent job opportunities in healthcare and allows individuals to
          serve society while building a stable career.
        </Typography>

        <Grid container spacing={3}>
          {[
            "Rural Health Centres",
            "Community Health Centres",
            "Government Hospitals",
            "Government Dispensaries",
            "NGOs",
            "Nursing Homes",
            "Old Age Homes",
            "Private Hospitals & Clinics",
            "Government Health Schemes",
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
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "26px" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Start Your Nursing Career Today 👩‍⚕️
        </Typography>

        <Button
          component={Link}
          to="/admission"
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #22c55e, #06b6d4)",
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

export default ANM;