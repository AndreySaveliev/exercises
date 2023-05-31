import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack, Box, Typography, Grid } from '@mui/material';
import { exercises } from '../utils/types';

import { apiOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({
  setExercises,
  exercises,
  bodyPart
}: {
  setExercises: React.Dispatch<React.SetStateAction<exercises>>;
  exercises: exercises;
  bodyPart: string;
}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paginate = (value: any) => {
    setCurrentPage(value)
    window.scrollTo({top: 2250, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []
      if (bodyPart === '') {
        exercisesData = await fetchData<exercises>(
          'https://exercisedb.p.rapidapi.com/exercises',
          apiOptions
        );
      } else {
        exercisesData = await fetchData<exercises>(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          apiOptions
        );
      }

      setExercises(exercisesData)
    }

    fetchExercisesData()
    
  },[bodyPart, setExercises])

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      {/* <Stack
        direction="row"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise}/>
        ))}
      </Stack> */}
      <Grid container gap={3} maxWidth="fit-content" justifyContent='center'>
        {currentExercises.map((exercise) => (
          <Grid item key={exercise.id}>
            <ExerciseCard key={exercise.id} exercise={exercise}/>
          </Grid>
        ))}
    </Grid>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
