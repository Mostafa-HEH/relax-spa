import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { useStyles } from "./styles";
import Tag from "./Tag";

const FilterTagsSection = () => {
  const [selected, setSelected] = useState(1);
  const [tagsPosition, setTagsPosition] = useState(0);
  const classes = useStyles({ tagsPosition });
  const tagWidth = useRef(null);

  const tags = [
    { id: 1, name: "All", selected: false },
    { id: 2, name: "Swedish", selected: false },
    { id: 3, name: "Hot stone", selected: false },
    { id: 4, name: "Aromatherapy", selected: false },
    { id: 5, name: "Deep tissue", selected: false },
    { id: 6, name: "Sports", selected: false },
    { id: 7, name: "Trigger point", selected: false },
    { id: 8, name: "Reflexology", selected: false },
    { id: 9, name: "Shiatsu", selected: false },
    { id: 10, name: "Thai", selected: false },
    { id: 11, name: "Prenatal", selected: false },
  ];

  return (
    <Grid item container className={classes.container}>
      <Grid item container className={classes.tagsContainer} ref={tagWidth}>
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
