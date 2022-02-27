import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import SectionsTitleWithLink from "../../Layouts/SectionsTitleWithLink";
import PhonesEmailsSocial from "./PhonesEmailsSocial";

const ConnectUs = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <SectionsTitleWithLink heading="Keep in touch with us" />
      <Grid item container className={classes.subContainer}>
        <Grid item container md={6}>
          <PhonesEmailsSocial />
        </Grid>
        <Grid item container md={6}>
          massage form
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ConnectUs;
