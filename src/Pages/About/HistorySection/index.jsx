import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";
import SectionsTitle from "../../../Layouts/SectionsTitle";

const HistorySection = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item xs={12}>
        <SectionsTitle title="Spa history" color="secondary" />
      </Grid>
      <Grid item xs={12}>
        <Typography component="p" className={classes.pargraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Quisque ut tempor urna.
          Integer finibus faucibus nibh et euismod. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque ut tempor urna. Integer finibus
          faucibus nibh et euismod.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HistorySection;
