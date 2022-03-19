// Products component contains:
//  1) Products component render .
//
// In this component you found ( mui )
//
//  uses  <Products/>

import Grid from "@mui/material/Grid";

import ServiceCard from "../../../Layouts/ProductCard";
import { useStyles } from "./styles";
import { servicesProducts } from "../../../Services/Utils/fakeData";

const Products = () => {
  // Products styles from './styles.js'.
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      {/* Render product */}
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
