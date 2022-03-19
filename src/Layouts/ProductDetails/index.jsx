// ProductDetails components contains:
//  1) three components and control them.
//  2) seprately it generate details pased on link.
//
// In this component you found (react route dom , mui)
//
//  uses ( <ProductDetails/> )
//
//    images         |       details / how it run / review
//                   |   <Details/> / <HowItRun/> / <Review/>
//                                                  <Comment/>

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useStyles } from "./styles";

import Details from "./Details";
import HowItRuns from "./HowItRun";
import Review from "./Review";

import { servicesProducts } from "../../Services/Utils/fakeData";

const ProductDetails = (props) => {
  // product details styles from './styles.js'.
  const classes = useStyles();

  // render tab slide pased on click tab.
  const [alignment, setAlignment] = useState("product-details");

  // control image to change between images.
  const [img, setImg] = useState(0);

  // Get current url to cpompare it with selected product.
  const { productId } = useParams(props);

  // tab change function.
  const handleTabChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // filter products to select spacific product pased on current link.
  const [product] = servicesProducts?.filter((product) => {
    return productId === `${product.title?.toLowerCase().split(" ").join("-")}`;
  });

  // conrol slide render tab function with alignment state.
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
      {/* image render */}
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
      {/* details render from tabs */}
      <Grid item container md={6} className={classes.detailsContainer}>
        <Grid item xs={12} className={classes.tabs}>
          <ToggleButtonGroup
            color="secondary"
            value={alignment}
            exclusive
            onChange={handleTabChange}
          >
            {/* tabs */}
            <ToggleButton value="product-details">Product details</ToggleButton>
            <ToggleButton value="how-to-run">How it run</ToggleButton>
            <ToggleButton value="review">Review</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item container className={classes.desContainer}>
          {/* slide function render pased on alignment slide */}
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
