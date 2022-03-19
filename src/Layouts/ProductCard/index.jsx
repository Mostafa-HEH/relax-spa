// ServiceCard components contains:
//  1) contins card for product on whole site.
//
// In this component you found (react route dom , mui)
//
//  uses ( <ServiceCard image="/image link for service" name="setvice name" description="service description" price="service price" duration="session duration"/> )

import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import CardActionArea from "@mui/material/CardActionArea";

import { useStyles } from "./styles";

const ServiceCard = ({ id, image, name, description, price, duration }) => {
  // ServiceCard styles from './styles.js'.
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardActionArea
        component={Link}
        to={`/services/${name?.toLowerCase().split(" ").join("-")}`}
      >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
          className={classes.image}
        />
        <CardContent className={classes.contentContainer}>
          <Box className={classes.titlePrice}>
            <Typography component="h5" className={classes.name}>
              {name}
            </Typography>
            <Typography component="h5" className={classes.price}>
              $
              <Box component="span" className={classes.priceDgt}>
                {price}
              </Box>
            </Typography>
          </Box>
          <Chip
            label={duration}
            size="small"
            color="primary"
            className={classes.duration}
          />
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
