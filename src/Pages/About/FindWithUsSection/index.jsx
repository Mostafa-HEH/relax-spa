import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import SectionsTitleWithLink from "../../../Layouts/SectionsTitleWithLink";
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
      <SectionsTitleWithLink heading="You can find with us" />
      <Grid item container className={classes.servicesContainer}>
        <ServiceRow
          image={massagetype}
          title="Different typs of massage"
          describtion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod.consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod."
          link={{ name: "Descover", url: "/services" }}
        />
        <ServiceRow
          direction="rtl"
          image={sauna}
          title="Sauna"
          describtion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod.consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod."
        />
        <ServiceRow
          image={steam}
          title="Steam"
          describtion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod.consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod."
        />
        <ServiceRow
          direction="rtl"
          image={jacuzzie}
          title="Jacuzzie"
          describtion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod.consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod."
        />
        <ServiceRow
          image={gym}
          title="GYM"
          describtion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod.consectetur adipiscing elit. Quisque ut
          tempor urna. Integer finibus faucibus nibh et euismod."
        />
      </Grid>
    </Grid>
  );
};

export default FindWithUsSection;
