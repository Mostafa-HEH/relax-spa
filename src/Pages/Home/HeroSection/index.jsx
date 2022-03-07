import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useStyles } from "./styles";
import PageNavegate from "../../../Layouts/PageNavegate";
import WorkTime from "./WorkTime";

import greenImg from "../../../Assets/Images/home-herosection.png";

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item container className={classes.slideContainer}>
        <Grid item className={classes.subContainerBackground} />
        <Box
          component="img"
          src={greenImg}
          alt="relax spa"
          className={classes.image}
        />
        <Grid item>
          <Typography component="h2" className={classes.maintitle}>
            Make the stress of daily life skip away, Make it a great day
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p" className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
            tempor urna. Integer finibus faucibus nibh et euismod.
          </Typography>
        </Grid>
        <Grid item>
          <PageNavegate name="View our services" link="/services" />
        </Grid>
      </Grid>
      <WorkTime />
      <Grid item className={classes.containerBackground} />
    </Grid>
  );
};

export default HeroSection;
