import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useStyles } from "./serviceCard.styles";

const ServiceCard = ({ image, productName, details, price, duration }) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={productName}
          className={classes.image}
        />
        <CardContent>
          <Box className={classes.titlePrice}>
            <Typography component="h5" className={classes.productName}>
              {productName}
            </Typography>
            <Typography component="h5" className={classes.price}>
              {price}$
            </Typography>
          </Box>
          <Typography component="h5">{duration}</Typography>
          <Typography variant="body2">{details}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
