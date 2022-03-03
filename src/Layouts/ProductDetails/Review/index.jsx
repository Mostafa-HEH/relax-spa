import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import Comment from "./Comment";
import SeeMoreButton from "../../SeeMoreButton";

const Review = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item className={classes.reviewCount}>
        20 Review
      </Grid>
      <Grid item container className={classes.comments}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Grid>
      <Grid item container className={classes.seeMore}>
        <SeeMoreButton />
      </Grid>
    </Grid>
  );
};

export default Review;
