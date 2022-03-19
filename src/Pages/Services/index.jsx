// Services page component contains:
//  1) Services Section .
//
// In this component you found ( mui )
//
//  uses                    ( <Services/>)
// <SearchSection/>  |  <FilterTagsSection/>  |  <Products/>  |  <SeeMoreButton/>
//                          <Tag/>

import Grid from "@mui/material/Grid";

import SearchSection from "./SearchSection";
import FilterTagsSection from "./FilterTagsSection";
import Products from "./Products";
import SeeMoreButton from "../../Layouts/SeeMoreButton";
import PagesTitle from "../../Layouts/PagesTitle";

import { useStyles } from "./styles";

const Services = () => {
  // Services styles from './styles.js'.
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container}>
        <PagesTitle title="Our services" />
        <SearchSection />
        <FilterTagsSection />
        <Products />
        {/* TODO handle see more button */}
        <SeeMoreButton />
      </Grid>
    </>
  );
};

export default Services;
