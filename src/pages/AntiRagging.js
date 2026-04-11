import { Box, Typography } from "@mui/material";
import React from "react";

const AntiRagging = () => {
  return (
    <Box sx={{ 
              background: "#0f172a", 
              color: "#fff",
              marginTop:{md:'123px',xs:'60px'},
              }}>
      
      {/* 🔥 Banner */}
      <Box
        sx={{
          height: { xs: "220px", md: "350px" },
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />

        <Typography
          sx={{
            position: "relative",
            fontSize: { xs: "26px", md: "40px" },
            fontWeight: "bold",
            letterSpacing: 2,
          }}
        >
          Anti Ragging
        </Typography>
      </Box>

      {/* 🔥 Content Section */}
      <Box
        sx={{
          py: { xs: 5, md: 10 },
          px: { xs: 2, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
          alignItems: "center",
        }}
      >
        {/* LEFT IMAGE */}
        <Box
          sx={{
            flex: 1,
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
            alt="Anti Ragging"
            sx={{
              width: "100%",
              height: { xs: "250px", md: "400px" },
              objectFit: "cover",
              transition: "0.4s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>

        {/* RIGHT TEXT */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: { xs: "22px", md: "30px" },
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Ragging Free Environment
          </Typography>

          <Typography sx={{ lineHeight: 1.8, color: "#cbd5f5" }}>
            Ragging is strictly prohibited within and outside the campus. Our
            institution ensures a safe, respectful, and supportive environment
            for all students. Every fresher is guided through counseling
            sessions, mentorship programs, and academic support systems to help
            them transition smoothly into college life.
          </Typography>
        </Box>
      </Box>

      {/* 🔥 Rules Section */}
      <Box sx={{ px: { xs: 2, md: 10 }, pb: 8 }}>
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "28px" },
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
          }}
        >
          Anti-Ragging Guidelines
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          
          {[
            "Ragging is strictly forbidden inside and outside campus.",
            "Students must follow discipline and anti-ragging guidelines.",
            "Freshers should attend counseling sessions regularly.",
            "Students can approach academic counselors anytime.",
            "Report ragging incidents immediately to authorities.",
            "Complaints can be made anonymously via phone or in person.",
            "Mentors are available for emotional and peer support.",
            "Separate hostel facilities for freshers.",
            "Dining areas are separated for freshers.",
            "Unresolved complaints can be escalated to police.",
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "100%", sm: "48%", md: "45%" },
                p: 3,
                borderRadius: "12px",
                background: "#1e293b",
                boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
                transition: "0.3s",
                "&:hover": {
                  background: "#334155",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography sx={{ fontSize: "14px", lineHeight: 1.6 }}>
                {i + 1}. {item}
              </Typography>
            </Box>
          ))}
          
        </Box>
      </Box>

      {/* 🔥 Squad Section */}
      <Box
        sx={{
          px: { xs: 2, md: 10 },
          pb: 10,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "28px" },
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
          }}
        >
          Anti-Ragging Squad
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {[
            "Squad visits campus areas regularly.",
            "Conducts surprise checks in hostels and hotspots.",
            "Records complaints and takes strict action.",
            "Keeps principal informed about incidents.",
            "Works with staff to maintain discipline.",
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                p: 3,
                borderRadius: "10px",
                background: "#1e293b",
                transition: "0.3s",
                "&:hover": {
                  background: "#334155",
                },
              }}
            >
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AntiRagging;