import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import SearchSection from "./SearchSection";
import FilterTagsSection from "./FilterTagsSection";
import Products from "./Products";
import SeeMoreButton from "./SeeMoreButton";

const Services = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <SearchSection />
      <FilterTagsSection />
      <Products />
      <SeeMoreButton />
    </Grid>
  );
};

export default Services;
