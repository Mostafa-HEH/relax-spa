import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import HistorySection from "./HistorySection";
import FindWithUsSection from "./FindWithUsSection";

const About = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <HistorySection />
      <FindWithUsSection />
    </Grid>
  );
};

export default About;
