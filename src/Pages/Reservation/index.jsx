import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { useStyles } from "./styles";
import PersonalSlide from "./PersonalSlide";

const Reservation = () => {
  const [step, setStep] = useState(0);
  const classes = useStyles();

  const steps = ["Personal", "Massage", "R.Number"];

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const stepRender = (step) => {
    switch (step) {
      case 0:
        return <PersonalSlide step={step} handleNext={handleNext} />;
      case 1:
        return (
          <Grid item container>
            Step
          </Grid>
        );

      default:
        return (
          <Grid item container>
            Something wrong
          </Grid>
        );
    }
  };

  return (
    <Grid item container className={classes.container}>
      <Grid item xs={12}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      {stepRender(step)}
    </Grid>
  );
};

export default Reservation;
