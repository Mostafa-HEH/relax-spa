import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";
import SectionsTitle from "../../../Layouts/SectionsTitle";
import SectionsLinks from "../../../Layouts/SectionsLinks";
import DepartmentsCard from "./DepartmentsCard";

import differentTypesOfMassage from "../../../Assets/Images/about-massage.png";
import sauna from "../../../Assets/Images/about-sauna.png";
import steam from "../../../Assets/Images/about-steam.png";
import jacuzzie from "../../../Assets/Images/about-jacuzzie.png";

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <SectionsTitle color="secondary" title="About us" />
      <SectionsLinks color="secondary" linkTitle="More about us" to="/about" />
      <Grid item>
        <Typography component="p" className={classes.description}>
          Relax Spa is an exclusive, luxurious and unique venue in the heart of
          Phnom Penh. It offers a range of exceptional healing therapies which
          take inspiration from around the globe and each one has been
          individually developed to help you find inner peace. The spa is an
          oasis within the busy, stressful city and with our highly-trained,
          world-class therapists, you’re definitely in good hands.
        </Typography>
      </Grid>
      <Grid item container className={classes.departmentsContainer}>
        <Grid item xs={12}>
          <Typography component="h4" className={classes.departmentsTitle}>
            We provides for you ...
          </Typography>
        </Grid>
        <Grid item container className={classes.departments}>
          <Grid>
            <DepartmentsCard
              name="Different types of massage"
              imageSrc={differentTypesOfMassage}
              xs={3}
            />
          </Grid>
          <Grid>
            <DepartmentsCard name="Sauna" imageSrc={sauna} />
          </Grid>
          <Grid>
            <DepartmentsCard name="Steam" imageSrc={steam} />
          </Grid>
          <Grid>
            <DepartmentsCard name="Jacuzzie" imageSrc={jacuzzie} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
