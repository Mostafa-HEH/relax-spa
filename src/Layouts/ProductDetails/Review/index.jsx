import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import Comment from "./Comment";

const Review = ({ product }) => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      {product.comments.map((comment, id) => (
        <Grid item key={id}>
          <Comment comment={comment} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Review;
