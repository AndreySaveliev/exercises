import HeroBannerImg from './..assets/images/banner.png';
import { Box, Typography, Button } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontWeight="400" fontSize="22px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        color="error"
        sx={{ backgroundColor: '#ff2625', padding: '10px' }}
      >
        Explore exercises
      </Button>
      <Typography
        fontWeight="600"
        color="#ff2625"
        sx={{
          opacity: '0.1',
          display: {
            xs: 'none',
            lg: 'block'
          }
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;