import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import ServiceCard from "../../../Layouts/ProductCard";
import { servicesProducts } from "../../../Services/Utils/fakeData";

const Products = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      {servicesProducts.map(
        ({ id, title, price, duration, description, images }) => (
          <ServiceCard
            key={id}
            id={id}
            image={images[0]}
            name={title}
            price={price}
            duration={duration}
            description={`${description.slice(0, 100)}...`}
          />
        )
      )}
    </Grid>
  );
};

export default Products;
