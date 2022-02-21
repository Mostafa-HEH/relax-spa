import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useStyles } from "./slide.styles";

const Slide = ({ image, title, subtitle, step }) => {
  const classes = useStyles({ image });

  return (
    <Grid item container className={classes.container}>
      <Grid item>
        <Typography component="h2" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="h3" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" component={Link} to="/reservation">
          Make an appointment
        </Button>
      </Grid>
      <Grid item className={classes.stepContainer}>
        <Typography component="p" className={classes.currentStep}>
          {step.currentStep}
        </Typography>
        /<Typography component="p">{step.totalSteps}</Typography>
      </Grid>
    </Grid>
  );
};

export default Slide;
