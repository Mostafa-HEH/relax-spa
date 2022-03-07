import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import ServiceCard from "../../../Layouts/ProductCard";
import SectionsTitle from "../../../Layouts/SectionsTitle";
import SectionsLinks from "../../../Layouts/SectionsLinks";

import serviceOne from "../../../Assets/Images/more-related-products.png";

const ServicesReviewSection = () => {
  const classes = useStyles();

  const products = [
    {
      id: 1,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 2,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 3,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 4,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
  ];

  return (
    <Grid item container className={classes.container}>
      <SectionsTitle color="secondary" title="Most populer" />
      <SectionsLinks
        color="secondary"
        to="/services"
        linkTitle="More about us"
      />
      <Grid item container className={classes.cardsContainer}>
        {products.map(({ id, name, price, duration, description, images }) => (
          <ServiceCard
            key={id}
            image={images[0]}
            name={name}
            price={price}
            duration={duration}
            description={description}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ServicesReviewSection;
