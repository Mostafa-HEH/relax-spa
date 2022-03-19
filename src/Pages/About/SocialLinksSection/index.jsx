// SocialLinksSection components contains:
//  1) SocialLinksSection render.
//
// In this component you found ( mui)
//
//  uses ( <SocialLinksSection/>)

import Grid from "@mui/material/Grid";

import SocialLinks from "../../../Layouts/SocialLinks";

import { useStyles } from "./styles";

const SocialLinksSection = () => {
  // SocialLinksSection styles from './styles.js'.
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <SocialLinks color="#000" />
    </Grid>
  );
};

export default SocialLinksSection;
