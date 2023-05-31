import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { apiOptions, apiOptionsYT, fetchData } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import { exercise, fetchedYTData } from '../utils/types';

const ExerciseDetail = () => {
  const [exerciseDitail, setExerciseDitail] = useState<exercise>();
  const [exerciseVideos, setExerciseVideos] = useState<fetchedYTData>();
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDitailData = await fetchData<exercise>(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        apiOptions
      );
      setExerciseDitail(exerciseDitailData);

      // const exerciseVideosData = await fetchData<fetchedYTData>(`${youtubeSearchUrl}/search?query=${exerciseDitailData.name}`, apiOptionsYT)
      // const { contents } = await fetchData<fetchedYTData>(
      //   `${youtubeSearchUrl}/search?query=${exerciseDitailData.name}`,
      //   apiOptionsYT
      // );
      const exerciseVideosData = await fetchData<fetchedYTData>(
        `${youtubeSearchUrl}/search?query=deadlift`,
        apiOptionsYT
      );
      setExerciseVideos(exerciseVideosData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDitail={exerciseDitail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDitail?.name} />
    </Box>
  );
};

export default ExerciseDetail;
