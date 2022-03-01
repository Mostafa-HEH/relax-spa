import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useStyles } from "./buttons.styles";

const Buttons = ({ step }) => {
  const classes = useStyles();

  if (step === 0)
    return (
      <Grid item container className={classes.container}>
        <Grid item>
          <Button variant="contained" size="large" type="submit">
            Next
          </Button>
        </Grid>
      </Grid>
    );
};

export default Buttons;
