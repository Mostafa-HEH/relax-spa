import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useStyles } from "./departmentsCard.styles";

const DepartmentsCard = ({ name, imageSrc }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography component="h2" className={classes.title}>
        {name}
      </Typography>
      <Box
        component="img"
        src={imageSrc}
        alt={name}
        className={classes.image}
      />
    </Box>
  );
};

export default DepartmentsCard;
