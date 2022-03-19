// Reservation section component contains:
//  1) Reservation Section .
//
// In this component you found ( mui, react redux)
//
//  uses                    ( <Reservation/>)
// <StartSlide/>  |  <PersonalSlide/>  |  <MassageSlide/>  |  <ReservationSlide/>
//   <Buttons/>         <Buttons/>           <Buttons/>

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import StartSlide from "./StartSlide";
import PersonalSlide from "./PersonalSlide";
import MassageSlide from "./MassageSlide";
import ReservationNumber from "./ReservationNumber";

import { useStyles } from "./styles";

const Reservation = (props) => {
  // slide step state
  const [step, setStep] = useState(0);

  // Last slide state
  const [lastSlide, setLastSlide] = useState(false);

  // steps form initila data
  // reservationNumber comes from backend
  const [reservationData, setReservationData] = useState({
    location: "",
    name: "",
    phonenumber: "",
    date: "",
    time: "",
    numberofperson: "",
    reservationNumber: 1238520,
  });

  // Reservation styles from './styles.js'.
  const classes = useStyles();

  // steps name
  const steps = ["Personal", "Massage"];

  useEffect(() => {
    // if data comes from homepage make it initial data and set step to the next step
    if (props.homePageData) {
      setReservationData((prev) => ({ ...prev, ...props.homePageData }));
      setStep(1);
    }

    // submit all data
    const submitData = () => {
      console.log(reservationData);
    };

    // if last step slide true submit data
    if (lastSlide) submitData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastSlide, props.homePageData]);

  // Handle next step
  const handleNext = (data, lastSlide) => {
    setReservationData({ ...reservationData, ...data });
    setStep((prev) => prev + 1);

    if (lastSlide) {
      setLastSlide(true);
    }
  };

  // Handle prev step
  const handleBack = (data) => {
    setReservationData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev - 1);
  };

  // top step details render
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

  // step slide render
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
