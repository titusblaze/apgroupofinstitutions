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

const GeneralDutyAssistant = () => {
  return (
    <Box sx={{ bgcolor: "#f8fafc", marginTop: { xs: "60px", md: "123px" }, overflowX: "hidden" }}>
      
      {/* 🔷 Banner */}
      <Box
        sx={{
          height: { xs: 250, md: 420 },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584515933487-779824d29309')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.8), rgba(6,182,212,0.8))",
          }}
        />

        <Box sx={{ position: "relative", color: "#fff" }}>
          <Typography fontSize={{ xs: 22, md: 42 }} fontWeight="bold">
            General Duty Assistant (GDA)
          </Typography>
          <Typography fontStyle="italic" mt={1}>
            "Care with Compassion, Service with Dedication"
          </Typography>
        </Box>
      </Box>

      {/* 🔷 Intro */}
      <Container sx={{ py: 6 }}>
        <Typography fontSize={26} fontWeight="bold" mb={2}>
          Vocational Diploma in General Duty Assistant (GDA)
        </Typography>

        <Typography sx={{ color: "#475569", lineHeight: 1.8 }}>
          Start Your Career in Healthcare with Compassion & Care
          <br /><br />
          The Vocational Diploma in General Duty Assistant (GDA) is a specialized
          training program designed to prepare individuals for entry-level roles
          in the healthcare sector. General Duty Assistants play a vital role in
          supporting doctors, nurses, and other medical staff while ensuring
          patient comfort, safety, and well-being.
          <br /><br />
          This course focuses on developing essential caregiving skills, basic
          medical knowledge, and practical experience required to work effectively
          in hospitals, clinics, and home care environments.
        </Typography>
      </Container>

      {/* 🔷 Course Overview */}
      <Container sx={{ pb: 6 }}>
        <Paper sx={{ p: 4, borderRadius: 4, boxShadow: 3 }}>
          <Typography fontWeight="bold" mb={2}>
            Course Overview
          </Typography>
          <Typography sx={{ color: "#475569" }}>
            The program provides a balanced combination of theoretical learning
            and hands-on training, enabling students to confidently assist in
            patient care and healthcare operations.
          </Typography>
        </Paper>
      </Container>

      {/* 🔷 Curriculum */}
<Box sx={{ bgcolor: "#e0f2fe", py: 6 }}>
  <Container>
    <Typography textAlign="center" fontSize={26} fontWeight="bold" mb={4}>
      Curriculum Highlights
    </Typography>

    <Grid container spacing={3}>
      {[
        {
          title: "Introduction to Healthcare",
          desc: "Basic concepts of healthcare systems and roles.",
          img: "https://images.unsplash.com/photo-1604480131833-5d7aea770e1c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Patient Care Skills",
          desc: "Bathing, dressing, feeding, and mobility support.",
          img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Vital Signs Monitoring",
          desc: "Measure BP, pulse, temperature, respiration.",
          img: "https://images.unsplash.com/photo-1725870953863-4ad4db0acfc2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Infection Control",
          desc: "Prevent infections and maintain hygiene.",
          img: "https://images.unsplash.com/photo-1583947581380-3d27ed02f76f?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Medical Terminology",
          desc: "Learn medical terms and documentation basics.",
          img: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Communication Skills",
          desc: "Interact with patients and healthcare teams.",
          img: "https://plus.unsplash.com/premium_photo-1683120885948-f93b23e58f4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbW11bmljYXRpb24lMjBza2lsbHN8ZW58MHx8MHx8fDA%3D",
        },
      ].map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Box
            sx={{
              height: "100%",
              borderRadius: 4,
              overflow: "hidden",
              background: "#fff",
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: "100%",
                height: 180,
                objectFit: "cover",
              }}
            />

            {/* Content */}
            <Box sx={{ p: 2, flexGrow: 1 }}>
              <Typography fontWeight="bold" mb={1}>
                {item.title}
              </Typography>
              <Typography fontSize="14px" color="#555">
                {item.desc}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

      {/* 🔷 Practical Training */}
      <Container sx={{ py: 6 }}>
        <Typography fontSize={26} fontWeight="bold" mb={2}>
          Practical Training
        </Typography>

        <Typography sx={{ color: "#475569", lineHeight: 1.8 }}>
          Students gain hands-on experience in:
          <br />• Patient handling and care techniques
          <br />• Monitoring vital signs
          <br />• Assisting healthcare professionals
          <br />• Maintaining hygiene and safety standards
        </Typography>
      </Container>

      {/* 🔷 Duration + Eligibility */}
      <Container sx={{ pb: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
              <Typography fontWeight="bold">Duration</Typography>
              <Typography>6 Months to 1 Year</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
              <Typography fontWeight="bold">Eligibility</Typography>
              <Typography>10th Pass | No age limit</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* 🔷 Career */}
      <Container sx={{ pb: 6 }}>
        <Typography textAlign="center" fontSize={26} fontWeight="bold" mb={4}>
          Career Opportunities
        </Typography>

        <Grid container spacing={3}>
          {[
            "General Duty Assistant",
            "Nursing Home Assistant",
            "Home Health Aide",
            "Hospital Ward Attendant",
            "Healthcare Assistant",
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper sx={{ p: 3, borderRadius: 4, textAlign: "center" }}>
                <Typography>{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 🔷 Why Choose */}
      <Container sx={{ pb: 6 }}>
        <Typography fontSize={26} fontWeight="bold" mb={2}>
          Why Choose This Course?
        </Typography>

        <Typography sx={{ color: "#475569", lineHeight: 1.8 }}>
          • High demand in healthcare sector
          <br />• Quick entry into medical field
          <br />• Practical skill-based training
          <br />• Opportunity to serve patients
          <br />• Strong foundation for advanced careers
        </Typography>
      </Container>

      {/* 🔷 CTA */}
      <Box textAlign="center" py={6} bgcolor="#0ea5e9" color="#fff">
        <Typography fontSize={24} fontWeight="bold" mb={2}>
          Begin Your Healthcare Journey Today ❤️
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

export default GeneralDutyAssistant;