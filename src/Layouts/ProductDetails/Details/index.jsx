import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";

const Details = ({ product }) => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.desContainer}>
      <Grid item>
        <Typography component="h2" className={classes.productName}>
          {product.title}
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
            {product.doThis} Person
          </Grid>
        </Grid>
        <Grid item container className={classes.feedbackItems}>
          <Grid item>Like this</Grid>
          <Grid item className={classes.feedbackItemsInfo}>
            {product.likeThis}%
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Details;
