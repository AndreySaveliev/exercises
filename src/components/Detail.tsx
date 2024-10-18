import { Typography, Stack, Button } from "@mui/material";
import { exercise } from "../utils/types";

import BodyPartImg from "./../assets/icons/body-part.png";
import TargetImg from "./../assets/icons/target.png";
import Equipment from "./../assets/icons/equipment.png";

const Detail = ({
  exerciseDitail,
}: {
  exerciseDitail: exercise | undefined;
}) => {
  const extraDetail = [
    {
      icon: BodyPartImg,
      name: exerciseDitail?.bodyPart,
      // name: 'dron'
    },
    {
      icon: TargetImg,
      name: exerciseDitail?.target,
      // name: 'dron'
    },
    {
      icon: Equipment,
      name: exerciseDitail?.equipment,
      // name: 'dron'
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={exerciseDitail?.gifUrl}
        alt={exerciseDitail?.name}
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform="capitalize">
          {exerciseDitail?.name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>
            {exerciseDitail?.name}
          </span>
          is one of the best <br /> exercises to target your{" "}
          {exerciseDitail?.target}. It will help you improve your <br /> mood
          and gain energy.
        </Typography>
        {extraDetail.map((detail) => (
          <Stack
            key={detail.name}
            direction="row"
            gap="24px"
            alignItems="center"
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={detail.icon}
                alt={detail.name}
                style={{ width: "50xp", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {detail.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
