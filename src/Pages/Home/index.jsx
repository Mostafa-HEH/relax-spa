import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item container>
        <HeroSection />
      </Grid>
      <Grid item>
        <AboutSection container />
      </Grid>
    </Grid>
  );
};

export default Home;
