import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useStyles } from "./styles";

const SocialLinks = ({ color }) => {
  const classes = useStyles({ color });

  return (
    <Grid item className={classes.social}>
      <Link to="//www.instagram.com/" target="_blank">
        <InstagramIcon className={classes.icon} />
      </Link>
      <Link to="//www.facebook.com/" target="_blank">
        <FacebookIcon className={classes.icon} />
      </Link>
      <Link to="//www.facebook.com/" target="_blank">
        <TwitterIcon className={classes.icon} />
      </Link>
    </Grid>
  );
};

export default SocialLinks;
