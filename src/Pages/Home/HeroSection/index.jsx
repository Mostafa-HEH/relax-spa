// HeroSection section component contains:
//  1) HeroSection section.
//
// In this component you found ( mui)
//
//  uses ( <HeroSection/>)

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import PageNavegate from "../../../Layouts/PageNavegate";
import WorkTime from "./WorkTime";

import { useStyles } from "./styles";

import greenImg from "../../../Assets/Images/home-herosection.png";

const HeroSection = () => {
  // HeroSection styles from './styles.js'.
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
            Enjoy spa treatment and relaxation
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p" className={classes.subtitle}>
            Feeling the effect of relaxing procedures, feeling how the body
            rests and is filled with life energy - is this not a dream?
          </Typography>
        </Grid>
        <Grid item>
          <PageNavegate name="View our services" link="/services" />
        </Grid>
      </Grid>
      {/* work time scagual */}
      <WorkTime />
      <Grid item className={classes.containerBackground} />
    </Grid>
  );
};

export default HeroSection;
