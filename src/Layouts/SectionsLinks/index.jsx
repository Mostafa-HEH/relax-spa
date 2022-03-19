// SectionsLinks components contains:
//  1) review slide render.
//
// In this component you found (React router ,mui)
//
//  uses ( <SectionsLinks linkTitle={link name here} to={link url} color={link color by default econdary main color}/>)

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useStyles } from "./styles";

const SectionsLinks = ({ linkTitle, to, color }) => {
  // SectionsLinks styles from './styles.js'.
  const classes = useStyles({ color });

  return (
    <Grid item container className={classes.container}>
      <Grid item component={Link} to={to}>
        {linkTitle}
      </Grid>
      <Grid item>
        <ArrowForwardIcon fontSize="small" color={color} />
      </Grid>
    </Grid>
  );
};

export default SectionsLinks;
