import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import Comment from "./Comment";

const Review = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item>
        <Comment />
      </Grid>
      <Grid item>
        <Comment />
      </Grid>
      <Grid item>
        <Comment />
      </Grid>
    </Grid>
  );
};

export default Review;
