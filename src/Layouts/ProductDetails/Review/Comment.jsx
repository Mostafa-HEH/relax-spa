import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

import { useStyles } from "./comment.styles";

const Comment = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item>
        <Avatar>JD</Avatar>
      </Grid>
      <Grid item container>
        <Grid item container className={classes.nameRateContainer}>
          <Grid item className={classes.name}>
            Jhon Doo
          </Grid>
          <Grid item>
            <Rating name="read-only" value={4.5} readOnly />
          </Grid>
        </Grid>
        <Grid item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur
          adipiscing elit .sit amet, consectetur adipiscing elit.consectetur
          adipiscing elit .
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
