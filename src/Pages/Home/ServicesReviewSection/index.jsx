import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import ServiceCard from "../../../Layouts/ProductCard";
import SectionsTitle from "../../../Layouts/SectionsTitle";
import SectionsLinks from "../../../Layouts/SectionsLinks";
import { servicesProducts } from "../../../Services/Utils/fakeData";

const ServicesReviewSection = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <SectionsTitle color="secondary" title="Most populer" />
      <SectionsLinks
        color="secondary"
        to="/services"
        linkTitle="More about us"
      />
      <Grid item container className={classes.cardsContainer}>
        {servicesProducts.map((product, id) => {
          if (id > 3) return null;
          return (
            <ServiceCard
              key={product.id}
              image={product.images[0]}
              name={product.title}
              price={product.price}
              duration={product.duration}
              description={`${product.description.slice(0, 100)}...`}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ServicesReviewSection;
