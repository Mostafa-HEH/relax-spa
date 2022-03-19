// Details components contains:
//  1) SectionsTitle  render.
//
// In this component you found ( mui)
//
//  uses ( <SectionsTitle title="section name" color="sections color by default secondary main"/>)

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";

const SectionsTitle = ({ title, color }) => {
  // SectionsTitle styles from './styles.js'.
  const classes = useStyles({ color });

  return (
    <Grid item container className={classes.container}>
      <Typography component="h3" className={classes.title}>
        {title}
      </Typography>
    </Grid>
  );
};

export default SectionsTitle;
