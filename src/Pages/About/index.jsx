import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import HistorySection from "./HistorySection";

const About = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <HistorySection />
    </Grid>
  );
};

export default About;
