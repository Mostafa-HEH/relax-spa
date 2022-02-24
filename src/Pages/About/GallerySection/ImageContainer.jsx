import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useStyles } from "./ImageContainer.styles";

const ImageContainer = ({
  image,
  title,
  decription,
  currentImage,
  totalImages,
}) => {
  const classes = useStyles({ image });

  return (
    <Grid item container className={classes.container}>
      <Grid item container className={classes.textContainer}>
        <Grid item className={classes.step}>
          <Box className={classes.currentStep}>{currentImage}</Box>/
          <Box>{totalImages}</Box>
        </Grid>
        <Grid item className={classes.title}>
          {title}
        </Grid>
        <Grid item className={classes.description}>
          {decription}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageContainer;
