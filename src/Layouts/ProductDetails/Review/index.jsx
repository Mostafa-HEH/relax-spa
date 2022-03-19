// Details components contains:
//  1) review slide render.
//
// In this component you found ( mui)
//
//  uses ( <Review product={product object}/>)

import Grid from "@mui/material/Grid";

import Comment from "./Comment";

import { useStyles } from "./styles";

const Review = ({ product }) => {
  // Review styles from './styles.js'.
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      {/* Render comments */}
      {product.comments.map((comment, id) => (
        <Grid item key={id}>
          <Comment comment={comment} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Review;
