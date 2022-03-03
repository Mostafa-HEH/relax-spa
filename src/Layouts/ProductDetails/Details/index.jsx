import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useStyles } from "./styles";

const Details = ({ product, tab, setTab }) => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.desContainer}>
      <Grid item>
        <Typography component="h2" className={classes.productName}>
          {product.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="p" className={classes.productDescription}>
          {product.description}
        </Typography>
      </Grid>
      <Grid item container className={classes.feedback}>
        <Grid item container className={classes.feedbackItems}>
          <Grid item>Duration</Grid>
          <Grid item className={classes.feedbackItemsInfo}>
            {product.duration}
          </Grid>
        </Grid>
        <Grid item container className={classes.feedbackItems}>
          <Grid item>Did this</Grid>
          <Grid item className={classes.feedbackItemsInfo}>
            30 Person
          </Grid>
        </Grid>
        <Grid item container className={classes.feedbackItems}>
          <Grid item>Like this</Grid>
          <Grid item className={classes.feedbackItemsInfo}>
            95%
          </Grid>
        </Grid>
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
  );
};

export default Details;
