import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProgramAdded = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "ANM (Auxiliary Nurse Midwifery)",
      path: "/anm",
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
      desc: "ANM focuses on basic nursing care, maternal health, and community healthcare. It prepares students to support doctors and nurses in hospitals and rural health centers. A perfect entry into the healthcare field with strong career opportunities.",
    },
    {
      title: "DMLT (Medical Lab Technology)",
      path: "/dmlt",
      img: "https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "DMLT trains students in laboratory testing, diagnosis, and medical equipment handling. It plays a vital role in disease detection and treatment support. Ideal for students interested in medical science and lab work.",
    },
    {
      title: "General Duty Assistant",
      path: "/gda",
      img: "https://plus.unsplash.com/premium_photo-1661481838510-f9690cdade32?q=80&w=1549&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "GDA course develops caregiving skills and patient support techniques. Students assist healthcare professionals in daily operations and ensure patient comfort. A quick pathway to start a career in healthcare.",
    },
    {
      title: "Catering & Hotel Management",
      path: "/catering",
      img: "https://images.unsplash.com/photo-1555244162-803834f70033",
      desc: "This course focuses on food production, hospitality, and hotel operations. Students learn customer service, kitchen management, and event handling. Ideal for careers in hotels, tourism, and catering industries.",
    },
    {
      title: "Office Automation",
      path: "/office-automation",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "Office Automation builds essential computer skills like MS Word, Excel, and communication tools. It prepares students for administrative and office roles with strong productivity and efficiency skills.",
    },
  ];

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", marginTop: { xs: "60px", md: "123px" } }}>
      
      {/* 🔷 Banner */}
      <Box
        sx={{
          height: { xs: "240px", md: "400px" },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
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
          <Typography
            fontSize={{ xs: 20, md: 40 }}
            fontWeight="bold"
          >
            Explore Our Programs
          </Typography>

          <Typography fontStyle="italic" mt={1}>
            "Build Skills Today for a Successful Tomorrow"
          </Typography>
        </Box>
      </Box>

      {/* 🔷 Courses Section */}
      <Container sx={{ py: 6 }}>
        <Typography
          textAlign="center"
          fontSize={{ xs: 22, md: 30 }}
          fontWeight="bold"
          mb={5}
        >
          Programs Offered
        </Typography>

        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={() => navigate(course.path)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 4,
                  overflow: "hidden",
                  height: "100%",
                  transition: "0.3s",
                  background:
                    "linear-gradient(135deg, #ffffff, #e0f2fe)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  height="180"
                  image={course.img}
                  alt={course.title}
                />

                {/* Content */}
                <CardContent>
                  <Typography fontWeight="bold" mb={1}>
                    {course.title}
                  </Typography>

                  <Typography fontSize="14px" color="#555">
                    {course.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgramAdded;