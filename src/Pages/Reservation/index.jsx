import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { useStyles } from "./styles";
import StartSlide from "./StartSlide";
import PersonalSlide from "./PersonalSlide";
import MassageSlide from "./MassageSlide";
import ReservationNumber from "./ReservationNumber";

const Reservation = () => {
  const [step, setStep] = useState(0);
  const classes = useStyles();

  const steps = ["Personal", "Massage"];

  const handleNext = (data) => {
    setStep((prev) => prev + 1);
  };

  const handleBack = (data) => {
    setStep((prev) => prev - 1);
  };

  const stepperRender = (currentStep) => {
    if (currentStep !== 0)
      return (
        <Grid item xs={12}>
          <Stepper activeStep={step - 1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
      );
  };

  const stepRender = (currentStep) => {
    switch (currentStep) {
      case 0:
        return <StartSlide setStep={setStep} />;

      case 1:
        return <PersonalSlide step={currentStep} handleNext={handleNext} />;
      case 2:
        return (
          <MassageSlide
            step={currentStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return <ReservationNumber />;

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
      {stepperRender(step)}
      {stepRender(step)}
    </Grid>
  );
};

export default Reservation;
