import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import { useStyles } from "./styles.js";
import Logo from "../Logo";

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item container xs={12} className={classes.linksContainer}>
        <Grid item>
          <Logo type="link" color="#fff" />
        </Grid>
        <Grid item component={List} className={classes.linksList}>
          <ListItem className={classes.linksListItem}>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem className={classes.linksListItem}>
            <Link to="/about">About us</Link>
          </ListItem>
          <ListItem className={classes.linksListItem}>
            <Link to="/services">Our services</Link>
          </ListItem>
          <ListItem className={classes.linksListItem}>
            <Link to="/connectus">Connect us</Link>
          </ListItem>
        </Grid>
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
      </Grid>
      <Grid item component={Divider} className={classes.divider} xs={6}></Grid>
      <Grid item className={classes.copyright} xs={12}>
        &copy; All Copyrights. 2022 Created by{" "}
        <Link to="//github.com/Mostafa-HEH" target="_blank">
          Mostafa Hassan
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
