import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import SectionsTitle from "../../../Layouts/SectionsTitle";
import ServiceRow from "./ServiceRow";

import massagetype from "../../../Assets/Images/about-massage.png";
import sauna from "../../../Assets/Images/about-sauna.png";
import steam from "../../../Assets/Images/about-steam.png";
import jacuzzie from "../../../Assets/Images/about-jacuzzie.png";
import gym from "../../../Assets/Images/about-gym.png";

const FindWithUsSection = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <SectionsTitle title="Find with us" color="secondary" />
      <Grid item container className={classes.servicesContainer}>
        <ServiceRow
          image={massagetype}
          title="Spa programs"
          describtion="Whether you prefer getting pampered with friends, your partner, or by yourself, we offer a variety of spa treatments and spa packages that take luxury to the next level. Melt away tension and soothe your senses with a relaxing massage treatment. Massage everyone should experience at least once."
          link={{ name: "Descover", url: "/services" }}
        />
        <ServiceRow
          direction="rtl"
          image={sauna}
          title="Sauna"
          describtion="You may have heard that stepping into a hot sauna after a session at the gym can be relaxing and detoxifying for your body.For hundreds of years, Scandinavians have been using saunas for their alleged benefits of cleansing, relaxation, and weight loss. Sauna use in Scandinavian countries starts in early childhood.Current research about the benefits of saunas is mixed. If you’re considering adding the sauna to your health and wellness routine, make sure to evaluate your specific health needs first."
        />
        <ServiceRow
          image={steam}
          title="Steam"
          describtion="Aqua therapy relaxes and refreshes. Steam Bath is one of the most common SPA&Wellnes treatments and there is a reason behind it. The health benefits that can be extracted from the frequent usage of it are numerous."
        />
        <ServiceRow
          direction="rtl"
          image={jacuzzie}
          title="Jacuzzie"
          describtion="A hot tub is a large tub full of water used for hydrotherapy, relaxation or pleasure. Some have powerful jets for massage purposes. Hot tubs are sometimes also known as 'spas' or by the trade name Jacuzzi."
        />
        <ServiceRow
          image={gym}
          title="GYM"
          describtion="We are very exited to welcome you in our gym. In order to share our commitment to helping people around the world become happier and healthier we offer our guests the best fitness equipment from Technogym."
        />
      </Grid>
    </Grid>
  );
};

export default FindWithUsSection;
