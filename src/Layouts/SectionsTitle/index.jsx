import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";

const SectionsTitle = ({ title, color }) => {
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
