// GallerySection components contains:
//  1) GallerySection render.
//
// In this component you found ( mui)
//
//  uses ( <GallerySection/>)

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import SectionsTitle from "../../../Layouts/SectionsTitle";

import { gallaryImages } from "../../../Services/Constants/about-gallary";

import { useStyles } from "./styles";

const GallerySection = () => {
  // image index state
  const [idx, setIdx] = useState(0);

  // GallerySection styles from './styles.js'.
  const classes = useStyles();

  // handle arrows click state
  const handleChangeImg = (action) => {
    if (action === "prev" && idx > 0) {
      setIdx((prev) => prev - 1);
    } else if (action === "next" && idx < gallaryImages.length - 1) {
      setIdx((prev) => prev + 1);
    } else if (action === "prev" && idx === 0) {
      setIdx((prev) => gallaryImages.length - 1);
    } else if (action === "next" && idx === gallaryImages.length - 1) {
      setIdx((prev) => 0);
    }
  };

  // get state of image idx and render image data based on image index
  const imageRender = (imageIdx) => {
    let { image, id, title, description } = gallaryImages[imageIdx];

    return (
      <Grid
        item
        sx={{ background: `url(${image})no-repeat center center/contain` }}
        className={classes.imageContainer}
      >
        <Grid item className={classes.textContainer}>
          <Grid item className={classes.step}>
            <Box component="span" className={classes.currentStep}>
              {id}
            </Box>
            /{gallaryImages.length}
          </Grid>
          <Grid item className={classes.title}>
            {title}
          </Grid>
          <Grid item className={classes.description}>
            {description}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid item container className={classes.container}>
      <SectionsTitle color="secondary" title="Have a look" />
      {imageRender(idx)}
      {/* arrows */}
      <Grid item container className={classes.arrows}>
        <Grid item>
          <ArrowBackIosNewIcon
            className={classes.icon}
            onClick={() => handleChangeImg("prev", idx)}
          />
        </Grid>
        <Grid item>
          <ArrowForwardIosIcon
            className={classes.icon}
            onClick={() => handleChangeImg("next", idx)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GallerySection;
