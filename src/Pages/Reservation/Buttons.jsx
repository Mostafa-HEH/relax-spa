import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useStyles } from "./buttons.styles";

const Buttons = ({ step, handleBack, data }) => {
  const classes = useStyles();

  const backRender = (currentStep) => {
    if (currentStep > 0) {
      return (
        <Grid item>
          <Button variant="text" size="large" onClick={() => handleBack(data)}>
            back
          </Button>
        </Grid>
      );
    }
  };

  return (
    <Grid item container className={classes.container}>
      {backRender(step)}
      <Grid item>
        <Button variant="contained" size="large" type="submit">
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buttons;
