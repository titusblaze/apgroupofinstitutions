import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../components/images/logo512.png";

// 🔥 Hide on Scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar
        sx={{
          display: { xs: "none", md: "flex" },
          width: "100%",
          left: 0,
          right: 0,
          backdropFilter: "blur(12px)",
          background:
            "linear-gradient(90deg, rgba(15,23,42,0.9), rgba(30,41,59,0.9))",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          transition: "0.3s",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "60px !important",
            px: 4,
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "10px",
              }}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                background: "linear-gradient(90deg,#7297ED,#07F572,#00D4FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AP GROUP OF INSTITUTIONS
            </Typography>
          </Box>

          {/* RIGHT SIDE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            
            {/* EMAIL */}
            <Link
              href="mailto:info@college.com"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "#cbd5f5",
                fontSize: "14px",
                transition: "0.3s",
                "&:hover": {
                  color: "#38bdf8",
                  transform: "scale(1.05)",
                },
              }}
            >
              <EmailIcon fontSize="small" />
              info@college.com
            </Link>

            {/* PHONE */}
            <Link
              href="tel:9751270576"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "#cbd5f5",
                fontSize: "14px",
                transition: "0.3s",
                "&:hover": {
                  color: "#22c55e",
                  transform: "scale(1.05)",
                },
              }}
            >
              <PhoneIcon fontSize="small" />
              +91 97512 70576
            </Link>

          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}