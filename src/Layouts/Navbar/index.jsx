import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useStyles } from "./styles";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const [drawer, setDrawer] = useState(false);
  const drawerMatch = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const classes = useStyles(props);

  const toggleDrawer = (anchor) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(anchor);
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          {drawerMatch ? (
            <Toolbar className={classes.toolbar}>
              <Typography variant="h1" component="h1" className={classes.logo}>
                <Link to="/">
                  <Box className={classes.logoColor} component="span">
                    Relax
                  </Box>{" "}
                  spa
                </Link>
              </Typography>
              <MenuIcon
                onClick={toggleDrawer(true)}
                fontSize="large"
                className={classes.menuIcon}
              />
            </Toolbar>
          ) : (
            <Toolbar className={classes.toolbar}>
              <Typography variant="h1" component="h1" className={classes.logo}>
                <Link to="/">
                  <Box className={classes.logoColor} component="span">
                    Relax
                  </Box>{" "}
                  spa
                </Link>
              </Typography>
              <List className={classes.navList}>
                <ListItem
                  className={`${classes.navListItem} ${classes.active}`}
                >
                  <Link to="/">Home</Link>
                </ListItem>
                <ListItem className={classes.navListItem}>
                  <Link to="/about">About us</Link>
                </ListItem>
                <ListItem className={classes.navListItem}>
                  <Link to="/services">Our services</Link>
                </ListItem>
                <ListItem className={classes.navListItem}>
                  <Link to="/connectus">Connect us</Link>
                </ListItem>
              </List>
              <Button variant="contained">Make an appointment</Button>
            </Toolbar>
          )}

          <Drawer
            open={drawer}
            onClose={toggleDrawer(false)}
            className={classes.drawer}
          >
            <Typography variant="h1" component="h1" className={classes.logo}>
              <Link to="/">
                <Box className={classes.logoColor} component="span">
                  Relax
                </Box>{" "}
                spa
              </Link>
            </Typography>
            <List className={classes.navList}>
              <ListItem className={classes.navListItem}>
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem className={classes.navListItem}>
                <Link to="/about">About us</Link>
              </ListItem>
              <ListItem className={classes.navListItem}>
                <Link to="/services">Our services</Link>
              </ListItem>
              <ListItem className={classes.navListItem}>
                <Link to="/connectus">Connect us</Link>
              </ListItem>
            </List>
            <Button variant="contained">Make an appointment</Button>
          </Drawer>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Navbar;
