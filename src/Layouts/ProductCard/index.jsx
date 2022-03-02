import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";

const ServiceCard = ({ id, image, name, description, price, duration }) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardActionArea
        component={Link}
        to={`/services/${name.replace(/\s/g, "").toLowerCase()}${id}-${duration
          .replace(/\s/g, "")
          .toLowerCase()}`}
      >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
          className={classes.image}
        />
        <CardContent>
          <Box className={classes.titlePrice}>
            <Typography component="h5" className={classes.name}>
              {name}
            </Typography>
            <Typography component="h5" className={classes.price}>
              {price}$
            </Typography>
          </Box>
          <Typography component="h5">{duration}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
