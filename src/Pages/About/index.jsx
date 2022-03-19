// About page component contains:
//  1) about page sections.
//
// In this component you found ( mui)
//
//  uses ( <About/>)
//
//                                                       <About/>
// <HistorySection /> | <FindWithUsSection /> | <WhereFindUsSection /> | <GallerySection /> | <SocialLinksSection />
//                          <ServiceRow/>

import Grid from "@mui/material/Grid";

import PagesTitle from "../../Layouts/PagesTitle";
import HistorySection from "./HistorySection";
import FindWithUsSection from "./FindWithUsSection";
import WhereFindUsSection from "./WhereFindUsSection";
import GallerySection from "./GallerySection";
import SocialLinksSection from "./SocialLinksSection";

import { useStyles } from "./styles";

const About = () => {
  // Review styles from './styles.js'.
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      {/* page title */}
      <PagesTitle title="About us" />
      {/* Sections for about page */}
      <HistorySection />
      <FindWithUsSection />
      <WhereFindUsSection />
      <GallerySection />
      <SocialLinksSection />
    </Grid>
  );
};

export default About;
