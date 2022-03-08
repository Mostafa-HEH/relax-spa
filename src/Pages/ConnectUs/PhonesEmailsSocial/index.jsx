import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

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
          <Link href="tel:0020123456789" color="common.black">
            +20123456789
          </Link>
        </Grid>
        <Grid item className={classes.items}>
          <Link href="tel:0020123456789" color="common.black">
            +20123456789
          </Link>
        </Grid>
        <Grid item className={classes.items}>
          <Link href="tel:0020123456789" color="common.black">
            +20123456789
          </Link>
        </Grid>
      </Grid>
      <Grid item container className={classes.group}>
        <Grid item className={classes.title}>
          Email
        </Grid>
        <Grid item className={classes.items}>
          <Link href="mailto:example@example.com" color="common.black">
            example@example.com
          </Link>
        </Grid>
      </Grid>
      <SocialLinks color="#000" />
    </Grid>
  );
};

export default PhonesEmailsSocial;
