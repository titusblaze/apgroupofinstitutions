import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  Phone,
  Email, 
  WhatsApp, 
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#fff",
        //mt: 8,
        pt: 6,
        pb: 3,
        px: { xs: 2, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effect */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(59,130,246,0.2)",
          borderRadius: "50%",
          filter: "blur(100px)",
          top: "-100px",
          left: "-100px",
        }}
      />

      <Grid container spacing={5} alignItems="flex-start" justifyContent={"space-between"}
      sx={{width:"100%", padding:'20px'}}>
        {/* ABOUT */}
        <Grid item xs={12} md={3} sx={{width:'300px'}}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.7, textWrap: "wrap" }}>
            AP Group of Institutions in Cheranmahadevi were established in the
            year of 2021. The AP Group of institutions was started by our trust
            to provide quality service to society.
          </Typography>
        </Grid>

        {/* ADDRESS + MAP */}
        <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                Address
            </Typography>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                Head Office
            </Typography>

            <Link
                href="https://maps.app.goo.gl/Q8FwwMS4RkYC7Bmw8"
                target="_blank"
                rel="noopener"
                underline="none"
                color="inherit"
            >
                <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                    width: "300px",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                    color: "#38bdf8",
                    transform: "translateX(5px)",
                    },
                }}
                >
                <LocationOn />
                <Typography variant="body2">
                     No.74, Ramasamy Kovil St, Cheranmahadevi, Tamil Nadu - 627414, India
                </Typography>
                </Stack>
            </Link>
            
        </Grid>

        {/* CONTACT */}
        <Grid item xs={12} md={2.5}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact
          </Typography>

          <Stack spacing={1}>
            <Tooltip title="Call Now">
              <Link
                href="tel:+919751270576"
                underline="none"
                color="inherit"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone fontSize="small" />
                  <Typography variant="body2">
                    +91 97512 70576
                  </Typography>
                </Stack>
              </Link>
            </Tooltip>

            <Tooltip title="Send Email">
              <Link
                href="mailto:info@apgroup.com"
                underline="none"
                color="inherit"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Email fontSize="small" />
                  <Typography variant="body2">
                    info@apgroup.com
                  </Typography>
                </Stack>
              </Link>
            </Tooltip>
          </Stack>
        </Grid>

        {/* COURSES */}
        <Grid item xs={12} md={2.5}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Courses
          </Typography>

          <Stack spacing={1}>
            <Link href="/anm" color="inherit" underline="hover">
              ANM Nursing
            </Link>
            <Link href="/dmlt" color="inherit" underline="hover">
              DMLT
            </Link>
            <Link href="/gda" color="inherit" underline="hover">
              General Duty Assistant
            </Link>
            <Link href="/hotel-management" color="inherit" underline="hover">
              Hotel Management
            </Link>
            <Link href="/office-automation" color="inherit" underline="hover">
              Office Automation
            </Link>
          </Stack>
        </Grid>

        {/* SOCIAL */}
        <Grid item xs={12} md={2}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
            Follow
        </Typography>

        <Stack direction="row" justifyContent={"space-between"} flexWrap="wrap"
        sx={{width:{md:"150px",xs:"300px"}}}>
            
            {/* Facebook */}
            <IconButton
            href="#"
            target="_blank"
            sx={{
                color: "#3b82f6",
                "&:hover": { transform: "scale(1.2)" },
            }}
            >
            <Facebook />
            </IconButton>

            {/* Instagram */}
            <IconButton
            href="#"
            target="_blank"
            sx={{
                color: "#ec4899",
                "&:hover": { transform: "scale(1.2)" },
            }}
            >
            <Instagram />
            </IconButton>

            {/* YouTube */}
            <IconButton
            href="#"
            target="_blank"
            sx={{
                color: "#ef4444",
                "&:hover": { transform: "scale(1.2)" },
            }}
            >
            <YouTube />
            </IconButton>

            {/* Twitter */}
            <IconButton
            href="#"
            target="_blank"
            sx={{
                color: "#1da1f2",
                "&:hover": { transform: "scale(1.2)" },
            }}
            >
            <Twitter />
            </IconButton>

            {/* WhatsApp */}
            <IconButton
            href="https://wa.me/919751270576"
            target="_blank"
            sx={{
                color: "#25D366",
                "&:hover": { transform: "scale(1.2)" },
            }}
            >
            <WhatsApp />
            </IconButton>

            {/* Call (Speed Dial) */}
            <IconButton
            href="tel:9751270576"
            sx={{
                color: "#22c55e",
                "&:hover": { transform: "scale(1.2)" },
            }}
            >
            <Phone />
            </IconButton>

            {/* Location */}
            <IconButton
            href="https://maps.app.goo.gl/Q8FwwMS4RkYC7Bmw8"
            target="_blank"
            sx={{
                color: "#f97316",
                "&:hover": { transform: "scale(1.2)" },
            }}
            >
            <LocationOn />
            </IconButton>

        </Stack>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

      {/* COPYRIGHT */}
      <Typography
        variant="body2"
        align="center"
        sx={{ opacity: 0.7 }}
      >
        © {new Date().getFullYear()} AP Group of Institutions. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;