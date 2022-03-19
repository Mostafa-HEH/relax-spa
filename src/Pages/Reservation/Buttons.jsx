// Buttons  component contains:
//  1) render component pased on slide.
//
// In this component you found ( mui)
//
//  uses ( <Buttons step={current step} handleBack={handle back function } data={ slide data}/>)

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useStyles } from "./buttons.styles";

const Buttons = ({ step, handleBack, data }) => {
  // Buttons styles from './styles.js'.
  const classes = useStyles();

  const backRender = (currentStep) => {
    // show this button only after first step and submit data to init state
    // to save it if client take step back to found it if he back again.
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

  // next button with submit type that work easly wit formik hock
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
