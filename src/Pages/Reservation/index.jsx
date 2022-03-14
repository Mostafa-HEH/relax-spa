import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { connect } from "react-redux";

import { useStyles } from "./styles";
import StartSlide from "./StartSlide";
import PersonalSlide from "./PersonalSlide";
import MassageSlide from "./MassageSlide";
import ReservationNumber from "./ReservationNumber";

const Reservation = (props) => {
  const [step, setStep] = useState(0);
  const [lasSlide, setLasSlide] = useState(false);
  const [reservationData, setReservationData] = useState({
    location: "",
    name: "",
    phonenumber: "",
    date: "",
    time: "",
    numberofperson: "",
    reservationNumber: 1238520,
  });
  const classes = useStyles();

  const steps = ["Personal", "Massage"];

  useEffect(() => {
    if (props.homePageData) {
      setReservationData((prev) => ({ ...prev, ...props.homePageData }));
      setStep(1);
    }
    const submitData = () => {
      console.log(reservationData);
    };

    if (lasSlide) submitData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lasSlide, props.homePageData]);

  const handleNext = (data, lastSlide) => {
    setReservationData({ ...reservationData, ...data });
    setStep((prev) => prev + 1);

    if (lastSlide) {
      setLasSlide(true);
    }
  };

  const handleBack = (data) => {
    setReservationData((prev) => ({ ...prev, ...data }));
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
        return (
          <PersonalSlide
            step={currentStep}
            handleNext={handleNext}
            initialData={reservationData}
          />
        );
      case 2:
        return (
          <MassageSlide
            step={currentStep}
            handleNext={handleNext}
            handleBack={handleBack}
            initialData={reservationData}
          />
        );
      case 3:
        return (
          <ReservationNumber
            reservationNumber={reservationData.reservationNumber}
          />
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
      {stepperRender(step)}
      {stepRender(step)}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return { homePageData: state.BookData };
};

export default connect(mapStateToProps)(Reservation);
