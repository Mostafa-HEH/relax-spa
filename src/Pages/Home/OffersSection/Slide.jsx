// Slide section component contains:
//  1) Slide Section .
//
// In this component you found ( mui, react router)
//
//  uses ( <Slide  image={image} title={title} subtitle={subtitle}  step={step}/>)

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useStyles } from "./slide.styles";

const Slide = ({ image, title, subtitle, step }) => {
  // Slide styles from './styles.js'.
  const classes = useStyles({ image });

  return (
    <Grid item container className={classes.container}>
      <Grid item className={classes.items}>
        <Typography component="h2" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item className={classes.items}>
        <Typography component="h3" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </Grid>
      <Grid item className={classes.items}>
        <Button variant="contained" component={Link} to="/reservation">
          Make an appointment
        </Button>
      </Grid>
      <Grid item className={`${classes.stepContainer} ${classes.items}`}>
        <Typography component="p" className={classes.currentStep}>
          {step.currentStep}
        </Typography>
        /<Typography component="p">{step.totalSteps}</Typography>
      </Grid>
    </Grid>
  );
};

export default Slide;
