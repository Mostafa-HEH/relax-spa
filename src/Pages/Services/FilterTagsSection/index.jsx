// FilterTags Section component contains:
//  1) FilterTags Section .
//
// In this component you found ( mui )
//
//  uses                    ( <FilterTagsSection/>)

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import Tag from "./Tag";
import { tags } from "../../../Services/Constants/services-tags";

import { useStyles } from "./styles";

const FilterTagsSection = () => {
  // selected tag state
  const [selected, setSelected] = useState(1);

  // tags position in container to control hide and shown part
  const [tagsPosition, setTagsPosition] = useState(0);

  // FilterTagsSection styles from './styles.js'.
  const classes = useStyles({ tagsPosition });

  return (
    <Grid item container className={classes.container}>
      <Grid item container className={classes.tagsContainer}>
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            name={tag.name}
            selected={selected === tag.id ? true : tag.selected}
            id={tag.id}
            setSelected={setSelected}
          />
        ))}
      </Grid>
      {tagsPosition >= 340 ? null : (
        <Box className={classes.rightArrow}>
          <ArrowForwardIosIcon
            onClick={() => {
              if (tagsPosition >= 350) {
                setTagsPosition(350);
              } else {
                setTagsPosition((prev) => prev + 50);
              }
            }}
          />
        </Box>
      )}
      {tagsPosition <= 10 ? null : (
        <Box className={classes.leftArrow}>
          <ArrowBackIosNewIcon
            onClick={() => {
              if (tagsPosition <= 0) {
                setTagsPosition(0);
              } else {
                setTagsPosition((prev) => prev - 50);
              }
            }}
          />
        </Box>
      )}
    </Grid>
  );
};

export default FilterTagsSection;
