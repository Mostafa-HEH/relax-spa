import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import HistorySection from "./HistorySection";
import FindWithUsSection from "./FindWithUsSection";
import WhereFindUsSection from "./WhereFindUsSection";
import GallerySection from "./GallerySection";
import SocialLinksSection from "./SocialLinksSection";
import PagesTitle from "../../Layouts/PagesTitle";

const About = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <PagesTitle title="About us" />
      <HistorySection />
      <FindWithUsSection />
      <WhereFindUsSection />
      <GallerySection />
      <SocialLinksSection />
    </Grid>
  );
};

export default About;
