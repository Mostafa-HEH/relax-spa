import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

import { useStyles } from "./styles";
import serviceOne from "../../Assets/Images/fullproduct-slide.png";
import Details from "./Details";

const ProductDetails = (props) => {
  const [tab, setTab] = useState("product-details");
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

  const [product] = products.filter((product) => {
    return productId === `${product.name?.toLowerCase().split(" ").join("-")}`;
  });

  const classes = useStyles();

  const renderHelper = (tab) => {
    switch (tab) {
      case "product-details":
        return <Details product={product} tab={tab} setTab={setTab} />;
      default:
        <div>Something wrong</div>;
    }
  };

  return (
    <Grid item container className={classes.container}>
      <Grid item container md={6} className={classes.imageContainer}>
        <Box
          component="img"
          src={product.images[0]}
          className={classes.image}
        />
      </Grid>
      <Grid item container md={6} className={classes.detailsContainer}>
        <Grid item container className={classes.tabs}>
          <Grid
            item
            className={classes.tab}
            sx={{ opacity: tab === "product-details" ? "1" : "0.4" }}
            onClick={() => setTab("product-details")}
          >
            Product details
          </Grid>
          <Grid
            item
            className={classes.tab}
            sx={{ opacity: tab === "how-to-run" ? "1" : "0.4" }}
            onClick={() => setTab("how-to-run")}
          >
            How it run
          </Grid>
          <Grid
            item
            className={classes.tab}
            sx={{ opacity: tab === "review" ? "1" : "0.4" }}
            onClick={() => setTab("review")}
          >
            Review
          </Grid>
        </Grid>

        {renderHelper(tab)}
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
