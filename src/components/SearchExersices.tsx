import React, { useEffect, useState } from 'react';

import { Box, Button, Stack, Typography, TextField } from '@mui/material';
import { fetchData, apiOptions } from '../utils/fetchData';
import { exercises } from '../utils/types';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExersices = ({
  setExercises,
  setBodyPart,
  bodyPart
}: {
  setExercises: React.Dispatch<React.SetStateAction<exercises>>;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  bodyPart: string;
}) => {
  const [search, setSearch] = useState('');

  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData<exercises>(
        'https://exercisedb.p.rapidapi.com/exercises',
        apiOptions
      );
      const searchedExercises = exercisesData.filter(
        (exerscise) =>
          exerscise.name.toLowerCase().includes(search) ||
          exerscise.target.toLowerCase().includes(search) ||
          exerscise.equipment.toLowerCase().includes(search) ||
          exerscise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');

      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData<[]>(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        apiOptions
      );
      setBodyParts([...bodyParts, ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises <br /> You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exertcise"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: {
              lg: '20px',
              xs: '14px'
            },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
        >
          Search{' '}
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExersices;
