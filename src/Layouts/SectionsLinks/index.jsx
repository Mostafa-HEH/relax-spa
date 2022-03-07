import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";

const SectionsLinks = ({ linkTitle, to, color }) => {
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
