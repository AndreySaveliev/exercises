import { Grid } from '@mui/material';
import BodyPartCard from './BodyPartCard';
interface HorizontalScrollBarProps {
  data: never[];
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const HorizontalScrollBar: React.FC<HorizontalScrollBarProps> = ({
  data,
  bodyPart,
  setBodyPart
}) => {
  return (
    <Grid container gap={3} maxWidth="fit-content" justifyContent='center'>
        {data.map((item) => (
          <Grid item key={item}>
            <BodyPartCard item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Grid>
        ))}
    </Grid>
  );
};

export default HorizontalScrollBar;
