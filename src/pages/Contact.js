import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";

// ✅ Static Data (No API)
const contacts = [
  {
    name: "Chairman",
    role: "Head of Institution",
    phone: "9751270576",
    email: "apcollege@email.com",
    address: "Cheranmahadevi, Tirunelveli, Tamil Nadu",
    location: "https://maps.google.com",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
  {
    name: "Director",
    role: "Academic Head",
    phone: "9751270576",
    email: "apcollege@email.com",
    address: "Cheranmahadevi, Tirunelveli, Tamil Nadu",
    location: "https://maps.google.com",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
  {
    name: "Admin Office",
    role: "Main Contact",
    phone: "9751270576",
    email: "apcollege@email.com",
    address: "Paramakudi, Tamil Nadu",
    location: "https://maps.google.com",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
  {
    name: "Reception Office",
    role: "Student Queries",
    phone: "9751270576",
    email: "apcollege@email.com",
    address: "Cheranmahadevi, Tirunelveli, Tamil Nadu",
    location: "https://maps.google.com",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
];

const branches = [
  {
    name: "Main Branch",
    desc: "Nursing College Campus",
    phone: "9751270576",
    email: "apcollege@email.com",
    address: "Cheranmahadevi, Tirunelveli, Tamil Nadu",
    location: "https://maps.google.com",
  },
  {
    name: "City Branch",
    desc: "Training Center",
    phone: "9751270576",
    email: "apcollege@email.com",
    address: "Tisaiyanvelai, Tirunelveli, Tamil Nadu",
    location: "https://maps.google.com",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📧 Email
  const sendEmail = () => {
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}
Phone: ${formData.mobile}
Email: ${formData.email}
Message: ${formData.message}`;

    window.location.href = `mailto:college@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  // 📱 WhatsApp
  const sendWhatsApp = () => {
    const message = `Name: ${formData.name}
Phone: ${formData.mobile}
Email: ${formData.email}
Message: ${formData.message}`;

    window.open(
      `https://wa.me/919751270576?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <Box 
    sx={{ 
      background: "#0f172a", 
      color: "#fff", 
      py: 5,
      marginTop:{md:'123px',xs:'60px'},
      }}>
      
      {/* 🔥 Heading */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 40 },
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        Contact Us 📞
      </Typography>

      {/* 👤 Contact Cards */}
      <Grid container spacing={3} justifyContent="center">
        {contacts.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 4,
                background: "linear-gradient(135deg,#1e293b,#0f172a)",
                color: "#fff",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px rgba(0,229,255,0.3)",
                },
              }}
            >
              <Avatar
                src={item.image}
                sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
              />
              <Typography fontWeight="bold">{item.name}</Typography>
              <Typography>{item.role}</Typography>

              <Typography mt={1}>📞 +91 {item.phone}</Typography>
              <Typography>📧 {item.email}</Typography>

              <Button
                href={`tel:+91${item.phone}`}
                sx={{ mt: 2, color: "#00e5ff" }}
              >
                Call Now
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 🏢 Branch Section */}
      {/* 🏢 Branch + 📝 Form (Side by Side) */}
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "flex-start",
    gap: { xs: 3, md: 5 }, // 🔥 reduced gap
    mt: 6,
    px: { xs: 2, md: 4 },
    maxWidth: "1200px", // 🔥 control total width
    mx: "auto", // center align
  }}
>
  
  {/* 🏢 LEFT - Branch Details */}
  <Box sx={{ flex: 1 }}>
    <Typography
      sx={{
        fontSize: 28,
        mb: 3,
        fontWeight: "bold",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      Branch Details
    </Typography>

    <Grid container spacing={3}>
      {branches.map((b, i) => (
        <Grid item xs={12} key={i}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              background: "#1e293b",
              color: "#fff",
              position: "relative",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 25px rgba(0,229,255,0.3)",
              },
            }}
          >
            <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
              <ShareIcon sx={{ color: "#00e5ff" }} />
            </IconButton>

            <Typography fontWeight="bold">{b.name}</Typography>
            <Typography sx={{ opacity: 0.8 }}>{b.desc}</Typography>

            <Button href={`tel:+91${b.phone}`} sx={{ color: "#00e5ff" }}>
              <PhoneIcon /> +91 {b.phone}
            </Button>

            <Button href={`mailto:${b.email}`} sx={{ color: "#00e5ff" }}>
              <MailIcon /> {b.email}
            </Button>

            <Button
              href={b.location}
              target="_blank"
              sx={{ color: "#00e5ff" }}
            >
              <LocationOnIcon /> {b.address}
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>

  {/* 📝 RIGHT - Contact Form */}
  <Box
    sx={{
      flex: 1,
      maxWidth: 500,
      width: "100%",
      p: 4,
      borderRadius: 4,
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    }}
  >
    <Typography textAlign="center" fontSize={26} mb={2}>
      Send Message ✉️
    </Typography>

    <TextField fullWidth label="Name" name="name" onChange={handleChange} sx={inputStyle} />
    <TextField fullWidth label="Phone" name="mobile" onChange={handleChange} sx={inputStyle} />
    <TextField fullWidth label="Email" name="email" onChange={handleChange} sx={inputStyle} />
    <TextField fullWidth multiline rows={3} label="Message" name="message" onChange={handleChange} sx={inputStyle} />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button onClick={sendEmail} sx={btnPrimary}>
              Email <MailIcon />
            </Button>

            <Button onClick={sendWhatsApp} sx={btnWhats}>
              WhatsApp <WhatsAppIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// 🎨 Styles
const inputStyle = {
  mt: 2,
  input: { color: "#fff" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#555" },
    "&:hover fieldset": { borderColor: "#00e5ff" },
  },
  "& label": { color: "#aaa" },
};

const btnPrimary = {
  background: "linear-gradient(45deg,#00e5ff,#2979ff)",
  color: "#000",
  px: 3,
};

const btnWhats = {
  background: "green",
  color: "#fff",
  px: 3,
};

export default Contact;