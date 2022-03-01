import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useStyles } from "./buttons.styles";

const Buttons = ({ step, handleBack, data }) => {
  const classes = useStyles();

  const backRender = (currentStep) => {
    if (currentStep > 1) {
      return (
        <Grid item>
          <Button variant="text" size="large" onClick={() => handleBack(data)}>
            back
          </Button>
        </Grid>
      );
    }
  };

  const nextRender = (currentStep) => {
    if (currentStep === 2) {
      return (
        <Grid item>
          <Button variant="contained" size="large" type="submit">
            Finish
          </Button>
        </Grid>
      );
    }
    return (
      <Grid item>
        <Button variant="contained" size="large" type="submit">
          Next
        </Button>
      </Grid>
    );
  };

  return (
    <Grid item container className={classes.container}>
      {backRender(step)}
      {nextRender(step)}
    </Grid>
  );
};

export default Buttons;
