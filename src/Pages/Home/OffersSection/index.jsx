import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import { useStyles } from "./styles";
import Slide from "./Slide";
import slideOnePhoto from "../../../Assets/Images/home-special-offer.png";
import slideTwoPhoto from '../../../Assets/Images/huum-xn_MghoT9HE-unsplash.jpg';

const slides = [
  {
    id: 1,
    image: slideOnePhoto,
    title: "Special offer for you today",
    subtitle: "100% free 15 minute massage",
  },
  {
    id: 2,
    image: slideTwoPhoto,
    title: "Three days start from 10/3/2022",
    subtitle: "Book and get free Sauna, Steam, Jacuzi ",
  },
];

const OffersSection = () => {
  const [step, setStep] = useState(0);
  const classes = useStyles();

  const renderSlide = (currentStep) => {
    let slideIndex = slides[currentStep];

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
