import { Box, Typography } from "@mui/material";
import React from "react";
import aboutImg from "../components/images/about-banner.jpg"; // adjust path

const AboutInstitute = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // ✅ key line
        alignItems: "center",
        gap: 4,
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 10 },
      }}
    >
      {/* LEFT TEXT */}
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          About Our Institute
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: 1.8,
            color: "#555",
            textAlign: "justify",
          }}
        >
          AP Group of Institutions in Cheranmahadevi were established in the
          year of 2021. The AP group of institutions was started by our trust
          to provide quality service to society. Our aim is to provide
          world-class health science education and vocational training to
          benefit all sections of society.
          <br /><br />
          AP Group of Institutions, under the governance of AP Group Trust,
          Cheranmahadevi, have been dedicatedly serving the community since
          our inception in 2021. Our journey began with the vision to
          revolutionize education by empowering individuals with the skills
          and knowledge necessary to thrive in today's competitive world.
        </Typography>
      </Box>

      {/* RIGHT IMAGE */}
      <Box sx={{ flex: 1 }}>
        <Box
          component="img"
          src={aboutImg}
          alt="About Institute"
          sx={{
            width: "100%",
            height: { xs: "220px", md: "350px" },
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutInstitute;