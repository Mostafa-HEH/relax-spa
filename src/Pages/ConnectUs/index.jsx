import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";

const ConnectUs = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      connect us
    </Grid>
  );
};

export default ConnectUs;
