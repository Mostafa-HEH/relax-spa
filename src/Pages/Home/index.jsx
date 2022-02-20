import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import HeroSection from "./HeroSection";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <HeroSection />
    </Grid>
  );
};

export default Home;
