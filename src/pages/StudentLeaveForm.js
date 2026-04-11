import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

const departments = [
  "Health Science (ANM)",
  "DMLT",
  "General Duty Assistant",
  "Catering & Hotel Management",
  "Office Automation",
];

const StudentLeaveForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    department: "",
    rollNo: "",
    phone: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, department, rollNo, phone, reason } = form;

    if (
      !firstName ||
      !lastName ||
      !department ||
      !rollNo ||
      !phone ||
      !reason
    ) {
      alert("Please fill all fields");
      return;
    }

    const message = `*Student Leave Request*%0A
Name: ${firstName} ${lastName}%0A
Department: ${department}%0A
Roll No: ${rollNo}%0A
Phone: ${phone}%0A
Reason: ${reason}`;

    const whatsappNumber = "919751270576"; // 👉 Replace with your number

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <Box sx={{ background: "#0f172a", minHeight: "100vh", color: "#fff", marginTop: { xs: "60px", md: "123px" }  }}>
      
      {/* 🔥 Banner */}
      <Box
        sx={{
          height: { xs: "220px", md: "350px" },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')",
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
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.6)",
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 30, md: 40 },
            zIndex: 1,
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(90deg,#38bdf8,#22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Student Leave Form 📄
        </Typography>
      </Box>

      {/* 📝 Form Section */}
      <Box
              sx={{
                width: "100%",
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                paddingBottom: 6,
              }}
            >
      <Box
        sx={{
          maxWidth: {md:"800px", xs:"80%"},
          mx: "auto",
          mt: -6,
          padding: { xs: 2, md: 4 },
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
        >
          Apply for Leave
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              required
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={{
                minWidth:{xs:"300px", md:"250px"},
                  "& .MuiInputBase-root": { color: "#fff", minHeight: "56px" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#555" },
                    "&:hover fieldset": { borderColor: "#38bdf8" },
                    "&.Mui-focused fieldset": { borderColor: "#22c55e" },
                  },
                }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              required
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={{
                minWidth:{xs:"300px", md:"250px"},
                  "& .MuiInputBase-root": { color: "#fff", minHeight: "56px" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#555" },
                    "&:hover fieldset": { borderColor: "#38bdf8" },
                    "&.Mui-focused fieldset": { borderColor: "#22c55e" },
                  },
                }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
                select
                fullWidth
                label="Department"
                name="department"
                required
                onChange={handleChange}
                value={form.department}
                InputLabelProps={{ style: { color: "#ccc" } }}
                sx={{minWidth:{md:'250px', xs:"300px"},
                  "& .MuiInputBase-root": {
                    color: "#fff",
                    minHeight: "56px", // ✅ Fix height
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#555",
                    },
                    "&:hover fieldset": {
                      borderColor: "#38bdf8",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#22c55e",
                    },
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#fff", // ✅ dropdown icon color
                  },
                }}
              >
              {departments.map((dep, index) => (
                <MenuItem
                  key={index}
                  value={dep}
                  sx={{
                    color: "#000", // ✅ dropdown list text visible
                  }}
                >
                  {dep}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Roll Number"
              name="rollNo"
              required
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={{minWidth:{xs:"300px", md:"250px"},
                  "& .MuiInputBase-root": { color: "#fff", minHeight: "56px" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#555" },
                    "&:hover fieldset": { borderColor: "#38bdf8" },
                    "&.Mui-focused fieldset": { borderColor: "#22c55e" },
                  },
                }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              required
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={{minWidth:{xs:"300px", md:"250px"},
                  "& .MuiInputBase-root": { color: "#fff", minHeight: "56px" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#555" },
                    "&:hover fieldset": { borderColor: "#38bdf8" },
                    "&.Mui-focused fieldset": { borderColor: "#22c55e" },
                  },
                }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Reason"
              name="reason"
              required
              onChange={handleChange}
              color="white"
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={{minWidth:{xs:"300px", md:"250px"},
                  "& .MuiInputBase-root": { color: "#fff", minHeight: "56px" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#555" },
                    "&:hover fieldset": { borderColor: "#38bdf8" },
                    "&.Mui-focused fieldset": { borderColor: "#22c55e" },
                  },
                }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              onClick={handleSubmit}
              sx={{
                minWidth:{xs:"300px"},
                py: 1.5,
                fontWeight: "bold",
                borderRadius: "10px",
                background: "linear-gradient(90deg,#22c55e,#38bdf8)",
                color: "#000",
                "&:hover": {
                  background: "linear-gradient(90deg,#16a34a,#0ea5e9)",
                },
              }}
            >
              Submit via WhatsApp
            </Button>
          </Grid>
        </Grid>
      </Box>
      </Box>
    </Box>
  );
};

export default StudentLeaveForm;