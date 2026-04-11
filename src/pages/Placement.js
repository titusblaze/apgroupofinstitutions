import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

const bannerImage =
  "https://images.unsplash.com/photo-1768839724944-6f7101c5a4da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const recruiters = [
  "Abi Eye Hospital, Salem",
  "Dhyan Health Care Hospital, Kovilpatti",
  "Public Welfare Hospital, Kovilpatti",
  "Vimala Clinic, Aruppukottai",
  "Jai Hospital, Kovilpatti",
  "Thanga Saratha Nursing Home, Thanjavur",
  "Sri Hari Hospital, Coimbatore",
  "K.K Hospital, Thanjavur",
  "Kevin Neuro Hospital, Nagercoil",
  "Sri Muthalamman Clinic, Paramakudi",
  "Jose Dental Clinic, Paramakudi",
  "Jeya Nursing Home, Paramakudi",
  "Prathiba Hospital, Paramakudi",
  "Sundaram Hospital, Paramakudi",
  "Sri Ram Hope, Paramakudi",
  "Sai Rithanya Cardio Clinic, Paramakudi",
  "Annai Lab, Mudukulathur",
  "Rose Lab, Mudukulathur",
  "Dhilip Jeevarajan Hospital, Virudhunagar",
  "Saro Raj Hospital, Salaigramam",
  "Vasas Eye Care, Paramakudi",
  "Vaithiyam Lab, Paramakudi",
  "Dr. Krishna Moorthy Clinic, Paramakudi",
  "Yagari Diagnostic Centre, Sayalkudi",
  "Priya Clinic, Paramakudi",
  "Malar Clinic Lab, Ilayankudi",
  "Sugam Clinic, Mudukulathur",
  "Sri Vinayaga Clinic, Theni",
  "Dr. Devi Dhamodharan Hospital, Dharapuram",
  "Dhanam Thangam Hospital, Kunnathur",
  "Nivetha Hospital, Dharapuram",
  "Subhiksha Blood Centre, Paramakudi",
  "Srinivasa Hospital, Kovilpatti",
  "AnnaBala Hospital, Kovilpatti",
  "Prime Line Hospital, Kovilpatti",
  "Pathma Praba Hospital, Kovilpatti",
  "Chennakesavan Hospital, Kovilpatti",
  "Siva Hospital, Kovilpatti",
  "R.M.S Hospital, Kovilpatti",
  "Sendhur Hospital, Kovilpatti",
  "Sri Hospital, Kovilpatti",
  "Thulasi Hospital, Kovilpatti",
  "Ganga Hospital, Kovilpatti",
  "Dhiyan Hospital, Kovilpatti",
  "K.G Hospital, Kovilpatti",
  "Sri Lakshmi Hospital, Kovilpatti",
  "S.R Hospital, Kovilpatti",
  "Susrusha Hospital, Nagercoil",
  "Kavin Hospital, Nagercoil",
  "J.P.R Hospital, Nagercoil",
  "Nivedha Hospital, Dharapuram",
  "AH Lab, Dharapuram",
];

const Placement = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    qualification: "",
    year: "",
    place: "",
    job: "",
    location: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `
Placement Application:
Name: ${form.name}
Age: ${form.age}
Qualification: ${form.qualification}
Passed Year: ${form.year}
Native Place: ${form.place}
Job Title: ${form.job}
Location: ${form.location}
`;

    window.open(
      `https://wa.me/919751270576?text=${encodeURIComponent(message)}`
    );
    setSuccess(true);
  };

  return (
    <Box sx={{ background: "#0f172a", color: "#fff" , marginTop:{md:'123px',xs:'60px'} }}>
      
      {/* 🔥 Banner */}
      <Box
        sx={{
          height: { xs: "60vh", md: "75vh" },
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(15,23,42,0.9)), url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 48 },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Build Your Future With Us 🚀
          </Typography>

          <Typography sx={{ fontSize: { xs: 14, md: 18 }, opacity: 0.8 }}>
            Connecting Students with Top Hospitals & Healthcare Careers
          </Typography>
        </Box>
      </Box>

      {/* 📝 Form Section */}
      <Box sx={{ p: { xs: 2, md: 5 } }}>
        <Typography
          variant="h4"
          textAlign="center"
          mb={4}
          sx={{ fontWeight: "bold" }}
        >
          Placement Application
        </Typography>

        <Paper
          sx={{
            maxWidth: 900,
            mx: "auto",
            p: 4,
            borderRadius: 4,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <Grid container spacing={2}>
            {[
              { label: "Name", name: "name" },
              { label: "Age", name: "age" },
              { label: "Qualification", name: "qualification" },
              { label: "Passed Out Year", name: "year" },
              { label: "Native Place", name: "place" },
              { label: "Job Title", name: "job" },
              { label: "Preferred Location", name: "location" },
            ].map((field, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  sx={{
                    width: "275px",
                    input: { color: "#fff" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#555" },
                      "&:hover fieldset": { borderColor: "#00e5ff" },
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={4}>
            <Button
              onClick={handleSubmit}
              sx={{
                px: 6,
                py: 1.5,
                fontSize: 16,
                borderRadius: "30px",
                background:
                  "linear-gradient(45deg, #00e5ff, #2979ff)",
                color: "#000",
                fontWeight: "bold",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              Submit via WhatsApp
            </Button>
          </Box>

          {success && (
            <Typography textAlign="center" mt={2} color="#00e676">
              ✅ Successfully Submitted!
            </Typography>
          )}
        </Paper>
      </Box>

      {/* 🏥 Recruiters */}
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          textAlign="center"
          mb={4}
          sx={{ fontWeight: "bold" }}
        >
          Our Recruiters
        </Typography>

        <Grid container spacing={3}>
          {recruiters.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, #1e293b, #0f172a)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,229,255,0.2)",
                  },
                }}
              >
                <Typography>
                  {index + 1}. {item}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Placement;