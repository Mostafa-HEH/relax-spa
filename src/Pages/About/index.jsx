import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import HistorySection from "./HistorySection";
import FindWithUsSection from "./FindWithUsSection";
import WhereFindUsSection from "./WhereFindUsSection";
import GallerySection from "./GallerySection";

const About = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <HistorySection />
      <FindWithUsSection />
      <WhereFindUsSection />
      <GallerySection />
    </Grid>
  );
};

export default About;
