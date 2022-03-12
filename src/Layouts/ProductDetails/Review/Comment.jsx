import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

import { useStyles } from "./comment.styles";

const Comment = ({ comment }) => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item container className={classes.nameRateContainer}>
        <Grid item className={classes.name}>
          {comment.name}
        </Grid>
        <Grid item>
          <Rating name="read-only" value={comment.rate} readOnly size="small" />
        </Grid>
      </Grid>
      <Grid item>{comment.content}</Grid>
    </Grid>
  );
};

export default Comment;
