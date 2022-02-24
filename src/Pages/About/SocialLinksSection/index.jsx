import Grid from "@mui/material/Grid";

import SocialLinks from "../../../Layouts/SocialLinks";
import { useStyles } from "./styles";

const SocialLinksSection = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <SocialLinks color="#000" />
    </Grid>
  );
};

export default SocialLinksSection;
