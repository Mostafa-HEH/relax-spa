import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import ServiceCard from "../../../Layouts/ProductCard";
import serviceOne from "../../../Assets/Images/more-related-products.png";

const Products = () => {
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

  return (
    <Grid item container className={classes.container}>
      {products.map(({ id, name, price, duration, description, images }) => (
        <ServiceCard
          key={id}
          image={images[0]}
          productName={name}
          price={price}
          duration={duration}
          details={description}
        />
      ))}
    </Grid>
  );
};

export default Products;
