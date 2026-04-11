import { Box } from '@mui/material'
import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutInstitute from '../components/AboutInstitute'
import ChairmanSection from '../components/ChairmanSection'
import VisionMissionMotto from '../components/VisionMissionMotto'
import WhyChooseUs from '../components/WhyChooseUs'

const Institute = () => {
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
          <AboutBanner />
          <AboutInstitute />
          <ChairmanSection />
          <VisionMissionMotto />
          <WhyChooseUs />
        </Box>
  )
}

export default Institute