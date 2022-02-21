import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import Slide from "./Slide";
import slideOnePhoto from "../../../Assets/Images/home-special-offer.png";

const OffersSection = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Slide
        image={slideOnePhoto}
        title="Special offer for you today"
        subtitle="100% free 15 minute massage"
        step={{ currentStep: 1, totalSteps: 20 }}
      />
    </Grid>
  );
};

export default OffersSection;
