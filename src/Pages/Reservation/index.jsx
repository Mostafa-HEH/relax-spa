import React from "react";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { useStyles } from "./styles";
import PersonalSlide from "./PersonalSlide";

const Reservation = () => {
  const classes = useStyles();

  const steps = ["Personal", "Massage", "R.Number"];

  return (
    <Grid item container className={classes.container}>
      <Grid item xs={12}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <PersonalSlide />
    </Grid>
  );
};

export default Reservation;
