import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import SocialLinks from "../../../Layouts/SocialLinks";

const PhonesEmailsSocial = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item container className={classes.group}>
        <Grid item className={classes.title}>
          Call us at
        </Grid>
        <Grid item className={classes.items}>
          +20123456789
        </Grid>
        <Grid item className={classes.items}>
          +20121212123
        </Grid>
        <Grid item className={classes.items}>
          +20121111111
        </Grid>
      </Grid>
      <Grid item container className={classes.group}>
        <Grid item className={classes.title}>
          Email
        </Grid>
        <Grid item className={classes.items}>
          example@example.com
        </Grid>
      </Grid>
      <SocialLinks color="#000" />
    </Grid>
  );
};

export default PhonesEmailsSocial;
