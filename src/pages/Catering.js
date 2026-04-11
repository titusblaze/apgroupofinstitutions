import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";

const Catering = () => {
  return (
    <Box 
    sx={{ 
      width: "100%", 
      overflowX: "hidden",
      marginTop:{md:'123px',xs:'60px'}, 
      }}>
      
      {/* 🔷 Banner */}
      <Box
        sx={{
          height: { xs: "220px", sm: "280px", md: "400px" },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555244162-803834f70033')",
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
              "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6))",
          }}
        />

        <Box sx={{ position: "relative", color: "#fff" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "28px", md: "42px" },
              fontWeight: "bold",
            }}
          >
            Catering & Hotel Management
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: "12px", sm: "14px", md: "18px" },
              fontStyle: "italic",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            "Great food is crafted with passion and served with excellence."
          </Typography>
        </Box>
      </Box>

      {/* 🔷 Main Content */}
      <Container sx={{ py: { xs: 3, md: 6 } }}>
        <Grid container spacing={4} alignItems="center">
          
          {/* Left Content */}
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
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              This course covers food production, hospitality management,
              catering operations, and guest services. Students gain practical
              knowledge in handling real-world hotel and catering business
              environments.
            </Typography>

            {/* Cards */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, borderRadius: 3 }}>
                  <Typography fontWeight="bold">Eligibility</Typography>
                  <Typography fontSize="14px">
                    8th / 10th / 12th Pass or Fail
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, borderRadius: 3 }}>
                  <Typography fontWeight="bold">Duration</Typography>
                  <Typography fontSize="14px">1 Year</Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Subjects */}
            <Paper sx={{ p: 2.5, mt: 3, borderRadius: 3 }}>
              <Typography fontWeight="bold" mb={1}>
                Course Subjects
              </Typography>
              <Typography fontSize="14px">
                • Front Office <br />
                • Hospitality <br />
                • Food Production <br />
                • Food & Beverage Service
              </Typography>
            </Paper>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
              alt="catering"
              sx={{
                width: "100%",
                height: { xs: "220px", sm: "300px", md: "100%" },
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 🔷 Future Scope */}
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
            Future & Scope
          </Typography>

          <Grid container spacing={3}>
            {[
              "Star Hotels",
              "Cruise / Ship",
              "Tourism Industry",
              "IRCTC Catering",
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 4,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 5,
                    },
                  }}
                >
                  <Typography fontSize="15px" fontWeight="500">
                    {item}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Catering;