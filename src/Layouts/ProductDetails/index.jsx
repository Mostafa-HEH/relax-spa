import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";

import { useStyles } from "./styles";
import serviceOne from "../../Assets/Images/more-related-products.png";

const ProductDetails = () => {
  const classes = useStyles();

  const { productId } = useParams();

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
      name: "Deep back nick",
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
    {
      id: 5,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 6,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 7,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 8,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 9,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 10,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 11,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
    {
      id: 12,
      name: "Deep full body",
      price: "45",
      duration: "60Min",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque uttempor urna. Integer finibus faucibus nibh et euismod.",
      images: [serviceOne],
    },
  ];

  const [product] = products.filter((product) => {
    return (
      productId ===
      `${product.name.replace(/\s/g, "").toLowerCase()}${
        product.id
      }-${product.duration.replace(/\s/g, "").toLowerCase()}`
    );
  });

  return (
    <Grid item container className={classes.container}>
      {product.name}
    </Grid>
  );
};

export default ProductDetails;
