import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import SearchSection from "./SearchSection";

const Services = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <SearchSection />
    </Grid>
  );
};

export default Services;
