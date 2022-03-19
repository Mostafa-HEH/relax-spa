// Connect us page component contains:
//  1) Connect us page sections.
//
// In this component you found ( mui)
//
//  uses ( <ConnectUs/>)
//
//             <ConnectUs/>
// <MassageForm /> | <PhoneEmailsSocial />

import Grid from "@mui/material/Grid";

import PhonesEmailsSocial from "./PhonesEmailsSocial";
import SendMassage from "./MassageForm";
import PagesTitle from "../../Layouts/PagesTitle";

import { useStyles } from "./styles";

const ConnectUs = () => {
  // ConnectUs styles from './styles.js'.
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
