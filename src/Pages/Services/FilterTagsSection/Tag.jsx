// Tag Section component contains:
//  1) Tag component render .
//
// In this component you found ( mui )
//
//  uses  <Tag name={name} selected={if selected turn true} id={id helps to select tag setSelected={return with id to select state}}/>

import Grid from "@mui/material/Grid";

import { useStyles } from "./tag.syles";

const Tag = ({ name, selected, id, setSelected }) => {
  // Tag styles from './styles.js'.
  const classes = useStyles({ selected });

  return (
    <Grid item className={classes.container} onClick={() => setSelected(id)}>
      {name}
    </Grid>
  );
};

export default Tag;
