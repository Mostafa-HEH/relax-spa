// Offers section component contains:
//  1) Offers Section .
//
// In this component you found ( mui)
//
//  uses ( <OffersSection/>)

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import Slide from "./Slide";

import { slides } from "../../../Services/Constants/home-offers";

import { useStyles } from "./styles";

const OffersSection = () => {
  // current offer state - index -.
  const [step, setStep] = useState(0);

  // OffersSection styles from './styles.js'.
  const classes = useStyles();

  // render slide helper function
  const renderSlide = (currentStep) => {
    // select slide pased on index
    let slideIndex = slides[currentStep];

    // slide logic dont be less than 0 or more than offers length
    if (currentStep > slides.length - 1) {
      slideIndex = slides[0];
      setStep(0);
    }

    if (currentStep < 0) {
      slideIndex = slides[slides.length - 1];
      setStep(slides.length - 1);
    }

    return (
      <Slide
        image={slideIndex.image}
        title={slideIndex.title}
        subtitle={slideIndex.subtitle}
        step={{ currentStep: currentStep + 1, totalSteps: slides.length }}
      />
    );
  };

  return (
    <Grid item container className={classes.container}>
      {renderSlide(step)}
      {/* Arows */}
      <Grid item container className={classes.arrows}>
        <Grid item>
          <ArrowCircleLeftIcon
            fontSize="large"
            className={classes.arrow}
            onClick={() => setStep((prev) => prev - 1)}
          />
        </Grid>
        <Grid item>
          <ArrowCircleRightIcon
            fontSize="large"
            className={classes.arrow}
            onClick={() => setStep((prev) => prev + 1)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OffersSection;
