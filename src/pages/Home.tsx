import React from 'react'
import {useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExersices from '../components/SearchExersices'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExersices />
      <Exercises />
    </Box>
  )
}

export default Home