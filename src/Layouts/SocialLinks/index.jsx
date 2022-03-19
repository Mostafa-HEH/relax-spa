// Details components contains:
//  1) SocialLinks render.
//
// In this component you found ( mui)
//
//  uses ( <SocialLinks color="icon color"/>)

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import { socialLinks } from "../../Services/Constants/socialLinks";

import { useStyles } from "./styles";

const SocialLinks = ({ color }) => {
  const classes = useStyles({ color });

  return (
    <Grid item className={classes.social}>
      {/* render links */}
      {socialLinks.map(({ id, link, icon }) => (
        <Link to={link} target="_blank">
          {icon(classes.icon)}
        </Link>
      ))}
    </Grid>
  );
};

export default SocialLinks;
