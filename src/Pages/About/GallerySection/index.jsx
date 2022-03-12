import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useStyles } from "./styles";
import SectionsTitle from "../../../Layouts/SectionsTitle";

import gallary1 from "../../../Assets/Images/about-gallary.png";
import gallary2 from "../../../Assets/Images/jared-rice-PibraWHb4h8-unsplash.jpg";
import gallary3 from "../../../Assets/Images/li-yang-a8iCZvtrHpQ-unsplash.jpg";

const gallaryImages = [
  {
    id: 1,
    image: gallary1,
    title: "Massage room",
    description: "Our massier with oil",
  },
  {
    id: 2,
    image: gallary2,
    title: "Shower room",
    description: "After massage you take a shower in this room",
  },
  {
    id: 3,
    image: gallary3,
    title: "Resciption pool",
    description: "Oul loopy",
  },
];

const GallerySection = () => {
  const [idx, setIdx] = useState(0);
  const classes = useStyles();

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
