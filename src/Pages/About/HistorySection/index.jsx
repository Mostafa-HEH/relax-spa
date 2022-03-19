// HistorySection component contains:
//  1) History section.
//
// In this component you found ( mui)
//
//  uses ( <HistorySection/>)

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionsTitle from "../../../Layouts/SectionsTitle";

import { useStyles } from "./styles";

const HistorySection = () => {
  // HistorySection styles from './styles.js'.
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item xs={12}>
        <SectionsTitle title="WHY RELAX SPA?" color="secondary" />
      </Grid>
      <Grid item xs={12}>
        <Typography component="p" className={classes.pargraph}>
          Relax Spa is an exclusive, luxurious and unique venue in the heart of
          Phnom Penh. It offers a range of exceptional healing therapies which
          take inspiration from around the globe and each one has been
          individually developed to help you find inner peace. The spa is an
          oasis within the busy, stressful city and with our highly-trained,
          world-class therapists, you’re definitely in good hands.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HistorySection;
