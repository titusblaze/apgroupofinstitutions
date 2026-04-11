import React from "react";
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";

const FloatingIcon = () => {
  return (
    <>
      {/* 🌐 SOCIAL (LEFT SIDE) */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 50, md: 50 },
          left: { xs: 16, md: 24 },
          zIndex: 1300,
        }}
      >
        <SpeedDial
          ariaLabel="social"
          icon={<ShareIcon />}
          direction="up"
          FabProps={{
            sx: {
              background: "#3b82f6",
              "&:hover": { background: "#2563eb" },
            },
          }}
        >
          <SpeedDialAction
            icon={<FacebookIcon />}
            tooltipTitle="Facebook"
            onClick={() => window.open("https://facebook.com", "_blank")}
          />

          <SpeedDialAction
            icon={<InstagramIcon />}
            tooltipTitle="Instagram"
            onClick={() => window.open("https://instagram.com", "_blank")}
          />

          <SpeedDialAction
            icon={<TwitterIcon />}
            tooltipTitle="Twitter"
            onClick={() => window.open("https://twitter.com", "_blank")}
          />

          <SpeedDialAction
            icon={<YouTubeIcon />}
            tooltipTitle="YouTube"
            onClick={() => window.open("https://youtube.com", "_blank")}
          />

          <SpeedDialAction
            icon={<LocationOnIcon />}
            tooltipTitle="Location"
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/Q8FwwMS4RkYC7Bmw8",
                "_blank"
              )
            }
          />
        </SpeedDial>
      </Box>

      {/* 📞 CONTACT (RIGHT SIDE) */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 50, md: 50 },
          right: { xs: 16, md: 24 },
          zIndex: 1300,
        }}
      >
        <SpeedDial
          ariaLabel="contact"
          icon={<PhoneIcon />}
          direction="up"
          FabProps={{
            sx: {
              background: "#22c55e",
              "&:hover": { background: "#16a34a" },
            },
          }}
        >
          <SpeedDialAction
            icon={<PhoneIcon />}
            tooltipTitle="Call"
            onClick={() => (window.location.href = "tel:9751270576")}
          />

          <SpeedDialAction
            icon={<WhatsAppIcon />}
            tooltipTitle="WhatsApp"
            onClick={() =>
              window.open("https://wa.me/919751270576", "_blank")
            }
          />

          <SpeedDialAction
            icon={<EmailIcon />}
            tooltipTitle="Email"
            onClick={() =>
              (window.location.href = "mailto:info@apgroup.com")
            }
          />
        </SpeedDial>
      </Box>
    </>
  );
};

export default FloatingIcon;