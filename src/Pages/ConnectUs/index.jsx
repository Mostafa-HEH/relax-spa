import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import PhonesEmailsSocial from "./PhonesEmailsSocial";
import SendMassage from "./MassageForm";
import PagesTitle from "../../Layouts/PagesTitle";

const ConnectUs = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <PagesTitle title="Keep in touch" />
      <Grid item container className={classes.subContainer}>
        <PhonesEmailsSocial />
        <SendMassage />
      </Grid>
    </Grid>
  );
};

export default ConnectUs;
