import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useParams } from "react-router-dom";

import { useStyles } from "./styles";
import Details from "./Details";
import HowItRuns from "./HowItRun";
import Review from "./Review";
import { servicesProducts } from "../../Services/Utils/fakeData";

const ProductDetails = (props) => {
  const [alignment, setAlignment] = useState("product-details");
  const [img, setImg] = useState(0);
  const { productId } = useParams(props);

  const handleTabChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [product] = servicesProducts?.filter((product) => {
    return productId === `${product.title?.toLowerCase().split(" ").join("-")}`;
  });

  const classes = useStyles();

  const renderHelper = (tab) => {
    switch (alignment) {
      case "product-details":
        return <Details product={product} />;
      case "how-to-run":
        return <HowItRuns product={product} />;
      case "review":
        return <Review product={product} />;
      default:
        <div>Something wrong</div>;
    }
  };

  return (
    <Grid item container className={classes.container}>
      <Grid item container md={6} className={classes.imageContainer}>
        <Box
          component="img"
          src={product.images[img]}
          className={classes.image}
        />
        <Grid item container className={classes.boxes}>
          {product.images.map((img, id) => (
            <Grid
              item
              key={id}
              onClick={() => setImg(id)}
              sx={{ background: `url(${img})no-repeat center center/cover` }}
              className={classes.boxImg}
            ></Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item container md={6} className={classes.detailsContainer}>
        <Grid item xs={12} className={classes.tabs}>
          <ToggleButtonGroup
            color="secondary"
            value={alignment}
            exclusive
            onChange={handleTabChange}
          >
            <ToggleButton value="product-details">Product details</ToggleButton>
            <ToggleButton value="how-to-run">How it run</ToggleButton>
            <ToggleButton value="review">Review</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item container className={classes.desContainer}>
          {renderHelper(alignment)}
        </Grid>
        <Grid item container className={classes.bookPriceContainer}>
          <Grid item className={classes.priceContainer}>
            $
            <Box component="span" className={classes.price}>
              {product.price}
            </Box>
          </Grid>
          <Grid item>
            <Button variant="contained">Book it now</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
