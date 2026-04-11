import { Box, Typography } from '@mui/material'
import React from 'react'
import ChairmanSection from '../components/ChairmanSection'

const Chairman = () => {
  return (
    <Box
    sx={{
      marginTop:{md:'123px',xs:'60px'},
      marginRight: 0,
      marginLeft: 0,
      padding: 0,
      width: "100%",
      overflowX: "hidden",
    }}>
      <ChairmanSection />

    <Box
    sx={{
      width:"100%",
      backgroundColor:"#0f172a",
      p: 2,
    }}
    >
    <Box
  sx={{
    maxWidth: "1000px",
    mx: "auto",
    my: 5,
    p: { xs: 3, md: 5 },
    borderRadius: 4,
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "#fff",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
  }}
>
  {/* Title */}
  <Typography
    sx={{
      fontSize: { xs: 24, md: 34 },
      fontWeight: "bold",
      mb: 2,
      textAlign: "center",
      background: "linear-gradient(45deg,#00e5ff,#00ff95)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    AP Group of Institutions
  </Typography>

  {/* Subtitle */}

  {/* Content */}
  <Typography sx={{ lineHeight: 1.8, fontSize: 15, color: "#e2e8f0" }}>
    Dear Members of the AP Education Community,
    <br /><br />
    It gives me immense pleasure to extend a warm welcome to each one of you to the vibrant and dynamic environment of AP Institutions. As the Chairman, I am privileged to lead an institution that stands as a testament to the transformative power of hard work, dedication, and a steadfast commitment to our shared vision.
    <br /><br />
    At AP Institutions, our vision is deeply rooted in the principles of hard work, open communication, teamwork, and a profound sense of responsibility. We believe in fostering a culture that not only prepares our students to face the challenges of today but also instills in them a sense of duty towards society and our nation at large.
    <br /><br />
    Education, to us, is more than just acquiring knowledge; it is about actively engaging with the world around us, applying what we learn, and making a positive impact. Our institution is dedicated to providing a holistic learning experience that equips our students not only with academic excellence but also with values and skills to succeed.
    <br /><br />
    We take immense pride in nurturing individuals who are not only professionally competent but also personally mature and service-oriented. At AP Institutions, we uphold the highest standards of academic excellence and discipline.
    <br /><br />
    As we embark on this journey together, I invite you to explore the opportunities that await you. Come, be a part of our community and let us strive for excellence together.
  </Typography>

  {/* Signature */}
  <Box sx={{ mt: 4, textAlign: "right" }}>
    <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
      Partnership With AP Group of Institutions
    </Typography>
    <Typography sx={{ fontSize: 14, color: "#94a3b8" }}>
      Ajith Kumar U,B.E, MBA.. , Pradeep Kumar U, B.E, MBA
    </Typography>
    <Typography sx={{ fontSize: 14, color: "#00e5ff" }}>
      Chairman
    </Typography>
  </Box>
</Box>
</Box>

    </Box>
  )
}

export default Chairman