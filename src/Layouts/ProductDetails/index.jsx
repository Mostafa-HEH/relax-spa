import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useParams } from "react-router-dom";

import { useStyles } from "./styles";
import serviceOne from "../../Assets/Images/fullproduct-slide.png";
import Details from "./Details";
import HowItRuns from "./HowItRun";
import Review from "./Review";

const ProductDetails = (props) => {
  const [alignment, setAlignment] = useState("product-details");
  const [img, setImg] = useState(0);
  const { productId } = useParams(props);

  const products = [
    {
      id: 1,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 2,
      name: "Deep back nick",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 3,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 4,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 5,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 6,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 7,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 8,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 9,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 10,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 11,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
    {
      id: 12,
      name: "Deep full body",
      price: "45",
      duration: "60 Minute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne, serviceOne, serviceOne, serviceOne, serviceOne],
    },
  ];

  const handleTabChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [product] = products.filter((product) => {
    return productId === `${product.name?.toLowerCase().split(" ").join("-")}`;
  });

  const classes = useStyles();

  const renderHelper = (tab) => {
    switch (alignment) {
      case "product-details":
        return <Details product={product} />;
      case "how-to-run":
        return <HowItRuns />;
      case "review":
        return <Review />;
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
        <Box className={classes.boxes}>
          {product.images.map((img, id) => (
            <Box component="span" key={id} onClick={() => setImg(id)}></Box>
          ))}
        </Box>
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
