import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useStyles } from "./departmentsCard.styles";

const DepartmentsCard = ({ name, imageSrc }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box
        sx={{ background: `url(${imageSrc})no-repeat center center/ cover` }}
        className={classes.image}
      />
      <Typography component="h2" className={classes.title}>
        {name}
      </Typography>
    </Box>
  );
};

export default DepartmentsCard;
