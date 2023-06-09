import {Box, Stack, Typography} from '@mui/material'

import Logo from './../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='40px'>
        <img src={Logo} width='200px' height='40px' />
        <Typography variant='h5' textTransform='capitalize' pb='40px' mt='20px'>you can have results or excuses not both</Typography>
      </Stack>
    </Box>
  )
}

export default Footer