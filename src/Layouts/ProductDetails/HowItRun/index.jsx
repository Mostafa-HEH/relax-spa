import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useStyles } from "./styles";

const HowItRun = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item container className={classes.listContainer}>
        <Grid item className={classes.title}>
          How the program runs
        </Grid>
        <Box component="ul" className={classes.list}>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Box>
      </Grid>
      <Grid item container className={classes.listContainer}>
        <Grid item className={classes.title}>
          How this program helps you
        </Grid>
        <Box component="ul" className={classes.list}>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
          <Box component="li">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HowItRun;
