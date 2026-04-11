import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const navigate = useNavigate();

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
            "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          }}
        >
          Admissions Open
        </Typography>
      </Box>

      {/* 🔥 Content Section */}
      <Box
        sx={{
          px: { xs: 2, md: 10 },
          py: { xs: 5, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
        }}
      >
        
        {/* LEFT CONTENT */}
        <Box sx={{ flex: 2 }}>
          
          <Typography sx={{ fontSize: "26px", fontWeight: "bold", mb: 3 }}>
            Admission Process
          </Typography>

          <Typography sx={{ mb: 2, color: "#cbd5f5", lineHeight: 1.8 }}>
            <b>Application:</b> Prospective students can apply to AP Group of
            Institutions through our online application portal. We evaluate
            each application holistically, considering academic achievements,
            extracurricular activities, and personal qualities.
          </Typography>

          <Typography sx={{ mb: 2, color: "#cbd5f5", lineHeight: 1.8 }}>
            <b>Documentation:</b> Applicants must submit required documents such
            as academic transcripts, certificates, and other relevant records as
            part of the application process.
          </Typography>

          <Typography sx={{ mb: 2, color: "#cbd5f5", lineHeight: 1.8 }}>
            <b>Interview (if applicable):</b> Certain programs may require an
            interview to assess the candidate’s interest, communication skills,
            and suitability for the course.
          </Typography>

          <Typography sx={{ mb: 2, color: "#cbd5f5", lineHeight: 1.8 }}>
            <b>Decision:</b> Once all documents are reviewed, applicants will be
            informed of their admission status. Selected candidates will receive
            further instructions regarding enrollment.
          </Typography>

          {/* Financial */}
          <Typography sx={{ fontSize: "22px", fontWeight: "bold", mt: 4, mb: 2 }}>
            Financial Aid & Scholarships
          </Typography>

          <Typography sx={{ color: "#cbd5f5", lineHeight: 1.8 }}>
            We believe that education should be accessible to all. AP Group of
            Institutions offers scholarships, financial assistance, and support
            programs to deserving students to help them achieve their academic
            goals.
          </Typography>

          {/* Visit */}
          <Typography sx={{ fontSize: "22px", fontWeight: "bold", mt: 4, mb: 2 }}>
            Visit Our Campus
          </Typography>

          <Typography sx={{ color: "#cbd5f5", lineHeight: 1.8 }}>
            We welcome students and parents to visit our campus and experience
            our facilities firsthand. Our admissions team is ready to assist you
            with guidance, campus tours, and detailed information.
          </Typography>

          {/* Closing */}
          <Typography sx={{ mt: 3, color: "#cbd5f5", lineHeight: 1.8 }}>
            Thank you for choosing AP Group of Institutions. We are committed to
            supporting your journey toward academic excellence and a successful
            career.
          </Typography>
        </Box>

        {/* RIGHT SIDE BUTTONS */}
        <Box
  sx={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 3,
    justifyContent: "center",
    alignItems: "center",
  }}
>

  {/* IMAGE + QUOTE */}
  <Box
    sx={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      overflow: "hidden",
      position: "relative",
    }}
  >
    <Box
      component="img"
      src="https://images.unsplash.com/photo-1589829068083-7cbcc8f6eed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFkbWlzc2lvbiUyMHF1b3RlfGVufDB8fDB8fHww"
      alt="Admission"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "0.4s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    />

    {/* Overlay */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          textAlign: "center",
          fontSize: { xs: "14px", md: "16px" },
          fontWeight: 500,
          position:'absolute',
          bottom: 10,
        }}
      >
        "Your future begins here. Apply today and build a brighter tomorrow."
      </Typography>
    </Box>
  </Box>

  {/* Online Application */}
  <Button
    fullWidth
    onClick={() => navigate("/application-form")}
    sx={{
      py: 2,
      borderRadius: "10px",
      fontWeight: "bold",
      fontSize: "16px",
      background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
      color: "#fff",
      "&:hover": {
        background: "linear-gradient(135deg, #2563eb, #3b82f6)",
      },
    }}
  >
    Apply Online
  </Button>

  {/* Download PDF */}
  <Button
    fullWidth
    component="a"
    href="/files/application-form.pdf"
    download
    sx={{
      py: 2,
      borderRadius: "10px",
      fontWeight: "bold",
      fontSize: "16px",
      border: "2px solid #3b82f6",
      color: "#3b82f6",
      "&:hover": {
        background: "#3b82f6",
        color: "#fff",
      },
    }}
  >
    Download Application Form
  </Button>

</Box>
      </Box>
    </Box>
  );
};

export default Admission;