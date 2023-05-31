import {useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExersices from '../components/SearchExersices'
import Exercises from '../components/Exercises'
import { exercises } from '../utils/types'

const Home = () => {

  const [exercises, setExercises] = useState<exercises>([]);
  const [bodyPart, setBodyPart] = useState('')
  return (
    <Box>
      <HeroBanner />
      <SearchExersices setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home