import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useStyles } from "./startSlide.styles";

const StartSlide = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item className={classes.title}>
        Welcome to relax spa
      </Grid>
      <Grid item className={classes.subtitle}>
        Now you can easly make an appointment with us online or call us
      </Grid>
      <Grid item>
        <Button variant="text">Call us +20123456789</Button>
      </Grid>
      <Grid item>
        <Button variant="contained">Make an appointment</Button>
      </Grid>
    </Grid>
  );
};

export default StartSlide;
