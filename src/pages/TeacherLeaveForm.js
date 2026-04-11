import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

// const fieldStyle = {
//   "& .MuiInputBase-root": {
//     color: "#fff",
//     height: "56px",
//   },
//   "& .MuiInputBase-multiline": {
//     height: "auto",
//   },
//   "& .MuiOutlinedInput-root": {
//     borderRadius: "10px",
//     "& fieldset": { borderColor: "#555" },
//     "&:hover fieldset": { borderColor: "#38bdf8" },
//     "&.Mui-focused fieldset": { borderColor: "#22c55e" },
//   },
// };

const TeacherLeaveForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    phone: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, designation, phone, reason } = form;

    if (!firstName || !lastName || !designation || !phone || !reason) {
      alert("Please fill all fields");
      return;
    }

    const message = `*Teacher Leave Request*%0A
Name: ${firstName} ${lastName}%0A
Designation: ${designation}%0A
Phone: ${phone}%0A
Reason: ${reason}`;

    const whatsappNumber = "919751270576"; // 👉 your number

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <Box
      sx={{
        background: "#0f172a",
        minHeight: "100vh",
        pb: 6,
        color: "#fff",
        marginTop: { xs: "60px", md: "123px" },
      }}
    >
      {/* 🔥 Banner */}
      <Box
        sx={{
          height: { xs: "220px", md: "350px" },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588072432836-e10032774350')",
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
          sx={{
            fontSize: { xs: 28, md: 40 },
            zIndex: 1,
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(90deg,#38bdf8,#22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Teacher Leave Form 🧑‍🏫
        </Typography>
      </Box>

      {/* 📝 Form */}
      <Box
        sx={{
          width: "100%",
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
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

          <Grid container spacing={2}>
            
            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6}>
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
                fullWidth
                label="Designation"
                name="designation"
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
                fullWidth
                label="Phone Number"
                name="phone"
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
                fullWidth
                multiline
                rows={4}
                label="Reason"
                name="reason"
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
              <Button
                fullWidth
                onClick={handleSubmit}
                sx={{
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

export default TeacherLeaveForm;