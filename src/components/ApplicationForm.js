import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const ApplicationForm = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const subject = "New Application - AP Group of Institutions";

    const body = `
AP GROUP OF INSTITUTIONS - APPLICATION FORM

--------------------------------------------------
| FIELD                    | VALUE                |
--------------------------------------------------
| Course                   | ${form.course || ""} |
| Name                     | ${form.name || ""} |
| Email                    | ${form.email || ""} |
| Mobile                   | ${form.mobile || ""} |
| DOB                      | ${form.dob || ""} |
| Sex                      | ${form.sex || ""} |
| Marital Status           | ${form.marital || ""} |
| Religion                 | ${form.religion || ""} |
| Caste                    | ${form.caste || ""} |
| Nationality              | ${form.nationality || ""} |
| Father Name              | ${form.father || ""} |
| Mother Name              | ${form.mother || ""} |
| Occupation               | ${form.occupation || ""} |
| Annual Income            | ${form.income || ""} |
| Address                  | ${form.address || ""} |
| Blood Group              | ${form.blood || ""} |
| Handicapped              | ${form.handicap || ""} |
| Hostel Needed            | ${form.hostel || ""} |
--------------------------------------------------

EDUCATIONAL DETAILS
--------------------------------------------------
| Year                     | ${form.year || ""}  |
| Register No              | ${form.regno || ""} |
| Board                    | ${form.board || ""} |
| Marks                    | ${form.marks || ""} |
--------------------------------------------------
`;

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=titus.blaze@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");
  };

  return (
    <Box
      sx={{
        background: "#0f172a",
        minHeight: "100vh",
        p: 2,
        marginTop: { md: "126px", xs: "63px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          background: "#fff",
          p: { xs: 2, md: 5 },
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{ fontSize: "28px", fontWeight: "bold", textAlign: "center" }}
        >
          AP GROUP OF INSTITUTIONS
        </Typography>

        <Typography sx={{ textAlign: "center", mb: 3 }}>
          APPLICATION FORM
        </Typography>

        {/* COURSE */}
        <TextField
          label="Course"
          name="course"
          onChange={handleChange}
          fullWidth
          sx={{ mb: 3 }}
        />

        {/* FORM */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <TextField label="Applicant Name" name="name" onChange={handleChange} fullWidth />
          <TextField label="Email" name="email" onChange={handleChange} fullWidth />
          <TextField label="Mobile" name="mobile" onChange={handleChange} fullWidth />

          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField label="Sex" name="sex" select onChange={handleChange} fullWidth>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>

          <TextField label="Marital Status" name="marital" onChange={handleChange} fullWidth />
          <TextField label="Religion" name="religion" onChange={handleChange} fullWidth />
          <TextField label="Caste" name="caste" onChange={handleChange} fullWidth />
          <TextField label="Nationality" name="nationality" onChange={handleChange} fullWidth />
          <TextField label="Father Name" name="father" onChange={handleChange} fullWidth />
          <TextField label="Mother Name" name="mother" onChange={handleChange} fullWidth />
          <TextField label="Parent Occupation" name="occupation" onChange={handleChange} fullWidth />
          <TextField label="Annual Income" name="income" onChange={handleChange} fullWidth />

          <TextField
            label="Address"
            name="address"
            multiline
            rows={3}
            onChange={handleChange}
            fullWidth
          />

          <TextField label="Blood Group" name="blood" onChange={handleChange} fullWidth />
          <TextField label="Physically Handicapped" name="handicap" onChange={handleChange} fullWidth />
          <TextField label="Hostel Needed" name="hostel" onChange={handleChange} fullWidth />
        </Box>

        {/* EDUCATION */}
        <Typography sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
          Educational Qualification
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <TextField label="Year" name="year" onChange={handleChange} />
          <TextField label="Register No" name="regno" onChange={handleChange} />
          <TextField label="Board" name="board" onChange={handleChange} />
          <TextField label="Marks" name="marks" onChange={handleChange} />
        </Box>

        {/* BUTTON */}
        <Button
          fullWidth
          onClick={handleSubmit}
          sx={{
            mt: 4,
            py: 1.5,
            background: "linear-gradient(135deg,#3b82f6,#60a5fa)",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Send Application via Gmail
        </Button>
      </Box>
    </Box>
  );
};

export default ApplicationForm;