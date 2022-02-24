import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useStyles } from "./styles";
import SectionsTitleWithLink from "../../../Layouts/SectionsTitleWithLink";
import ImageContainer from "./ImageContainer";
import gallary1 from "../../../Assets/Images/about-gallary.png";

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const classes = useStyles();

  const handleChange = (current) => {
    if (current === "prev") {
      if (currentImage === 1) {
        setCurrentImage(20);
      } else {
        setCurrentImage((prev) => prev - 1);
      }
    }
    if (current === "next") {
      if (currentImage === 20) {
        setCurrentImage(1);
      } else {
        setCurrentImage((prev) => prev + 1);
      }
    }
  };

  return (
    <Grid item container className={classes.container}>
      <SectionsTitleWithLink heading="Have a look to our spa" />
      <ImageContainer
        image={gallary1}
        title="Deep full body massage"
        decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tempor urna."
        currentImage={currentImage}
        totalImages="20"
      />
      <Grid item container className={classes.arrows}>
        <Grid item>
          <ArrowBackIosNewIcon
            className={classes.icon}
            onClick={() => {
              handleChange("prev");
            }}
          />
        </Grid>
        <Grid item>
          <ArrowForwardIosIcon
            className={classes.icon}
            onClick={() => {
              handleChange("next");
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GallerySection;
