import { Box } from '@mui/material'
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import AboutInstitute from '../components/AboutInstitute'
import ChairmanSection from '../components/ChairmanSection'
import VisionMissionMotto from '../components/VisionMissionMotto'
import CoursesOffered from '../components/CoursesOffered'

const Home = () => {
  return (
    <Box
    sx={{
      marginTop:{md:'73px',xs:'60px'},
      marginRight: 0,
      marginLeft: 0,
      padding: 0,
      width: "100%",
      overflowX: "hidden",
    }}>                   
      <ImageSlider />
      <AboutInstitute />
      <ChairmanSection />
      <VisionMissionMotto />
      <CoursesOffered />
      </Box>
  )
}

export default Home