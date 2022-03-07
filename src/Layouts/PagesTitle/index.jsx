import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";

const PagesTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      {title}
    </Grid>
  );
};

export default PagesTitle;
