import React from "react";
import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import StartSlide from "./StartSlide";

const Reservation = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <StartSlide />
    </Grid>
  );
};

export default Reservation;
