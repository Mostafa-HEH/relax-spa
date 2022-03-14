import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useStyles } from "./reservationNumber.styles";

const ReservationNumber = ({ reservationNumber }) => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item className={classes.title}>
        Thanks for reservation
      </Grid>
      <Grid item>We are waiting you in Mansoura branch</Grid>
      <Grid item className={classes.subtitle}>
        your reservation number is {reservationNumber}
        <br />
        keep it with you when you arrive
      </Grid>
      <Grid item>
        <Button variant="text" component={Link} to="/" size="large">
          Back to homepage
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReservationNumber;
