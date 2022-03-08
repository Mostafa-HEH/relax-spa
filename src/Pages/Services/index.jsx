import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import SearchSection from "./SearchSection";
import FilterTagsSection from "./FilterTagsSection";
import Products from "./Products";
import SeeMoreButton from "../../Layouts/SeeMoreButton";
import PagesTitle from "../../Layouts/PagesTitle";

const Services = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container}>
        <PagesTitle title="Our services" />
        <SearchSection />
        <FilterTagsSection />
        <Products />
        <SeeMoreButton />
      </Grid>
    </>
  );
};

export default Services;
