// Footer components contains:
//  1) fast links to site pages (Home - about us - our services - connect us).
//  2) creator and designer / site copy rights.
//
// In this component you found (react route dom , mui)
//
//  uses ( <Footer/> )

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import Logo from "../Logo";
import SocialLinks from "../SocialLinks";

import { menuLinks } from "../../Services/Constants/footer";

import { useStyles } from "./styles.js";

const Footer = () => {
  // footer styles comes from './styles.js' .
  const classes = useStyles();

  // Component jsx
  return (
    <Grid container className={classes.container}>
      <Grid item container xs={12} className={classes.linksContainer}>
        <Grid item>
          {/* Spa logo */}
          <Logo type="link" color="#fff" />
        </Grid>
        {/* Menu Links */}
        <Grid item component={List} className={classes.linksList}>
          {/* generate menu links from menuLinks object */}
          {menuLinks.map(({ id, linkUrl, linkName }) => (
            <ListItem key={id} className={classes.linksListItem}>
              <Link to={linkUrl}>{linkName}</Link>
            </ListItem>
          ))}
        </Grid>
        <SocialLinks />
      </Grid>
      {/* divider between footer links and copy rights */}
      <Grid item component={Divider} className={classes.divider} xs={6} />
      {/* Copyrights */}
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
