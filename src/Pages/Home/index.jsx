import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OffersSection from "./OffersSection";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <HeroSection />
      <AboutSection />
      <OffersSection />
    </Grid>
  );
};

export default Home;
