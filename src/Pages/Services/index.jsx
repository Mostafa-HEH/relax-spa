import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import SearchSection from "./SearchSection";
import FilterTagsSection from "./FilterTagsSection";

const Services = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <SearchSection />
      <FilterTagsSection />
    </Grid>
  );
};

export default Services;
