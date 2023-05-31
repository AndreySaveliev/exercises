import { Stack, Typography } from '@mui/material';
import Icon from './../assets/icons/gym.png';
const BodyPartCard = ({
  item,
  bodyPart,
  setBodyPart
}: {
  item: string;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Stack
      onClick={() => setBodyPart(item)}
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
        borderTop: bodyPart === item ? '4px solid #ff2625' : ''
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize='24px' fontWeight='bold' color="#3a1212" textTransform='capitalize'>{item}</Typography>
    </Stack>
  );
};

export default BodyPartCard;
