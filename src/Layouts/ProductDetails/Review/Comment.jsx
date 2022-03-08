import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

import { useStyles } from "./comment.styles";

const Comment = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item container className={classes.nameRateContainer}>
        <Grid item className={classes.name}>
          Jhon Doo
        </Grid>
        <Grid item>
          <Rating name="read-only" value={4.5} readOnly size="small" />
        </Grid>
      </Grid>
      <Grid item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur
        adipiscing elit .sit amet, consectetur adipiscing elit.consectetur
        adipiscing elit .
      </Grid>
    </Grid>
  );
};

export default Comment;
