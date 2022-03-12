import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CallIcon from "@mui/icons-material/Call";

import { useStyles } from "./styles";
import Logo from "../Logo";

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
  const [active, setActive] = useState("home");
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

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setActive("home");
        break;
      case "/about":
        setActive("about");
        break;
      case "/services":
        setActive("services");
        break;
      case "/connectus":
        setActive("connect");
        break;
      default:
        setActive("");
        break;
    }

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          {drawerMatch ? (
            <Toolbar className={classes.toolbar}>
              <Logo type="link" />
              <MenuIcon
                onClick={toggleDrawer(true)}
                className={classes.menuIcon}
              />
            </Toolbar>
          ) : (
            <Toolbar className={classes.toolbar}>
              <Logo type="link" />
              <List className={classes.navList}>
                <ListItem
                  className={`${classes.navListItem} ${
                    active === "home" ? classes.active : null
                  }`}
                  onClick={() => setActive("home")}
                >
                  <Link to="/">
                    <HomeIcon fontSize="small" />
                    <Box component="span">Home</Box>
                  </Link>
                </ListItem>
                <ListItem
                  className={`${classes.navListItem} ${
                    active === "about" ? classes.active : null
                  }`}
                  onClick={() => setActive("about")}
                >
                  <Link to="/about">
                    <InfoIcon fontSize="small" />
                    <Box component="span">About us</Box>
                  </Link>
                </ListItem>
                <ListItem
                  className={`${classes.navListItem} ${
                    active === "services" ? classes.active : null
                  }`}
                  onClick={() => setActive("services")}
                >
                  <Link to="/services">
                    <MedicalServicesIcon fontSize="small" />
                    <Box component="span">Our services</Box>
                  </Link>
                </ListItem>
                <ListItem
                  className={`${classes.navListItem} ${
                    active === "connect" ? classes.active : null
                  }`}
                  onClick={() => setActive("connect")}
                >
                  <Link to="/connectus">
                    <CallIcon fontSize="small" />
                    <Box component="span">Connect us</Box>
                  </Link>
                </ListItem>
              </List>
              <Button variant="contained" component={Link} to="/reservation">
                Make an appointment
              </Button>
            </Toolbar>
          )}

          <Drawer
            open={drawer}
            onClose={toggleDrawer(false)}
            className={classes.drawer}
          >
            <Logo type="link" />
            <List className={classes.navList}>
              <ListItem
                className={`${classes.navListItem} ${
                  active === "home" ? classes.active : null
                }`}
                onClick={() => setActive("home")}
              >
                <Link to="/">
                  <HomeIcon fontSize="small" />
                  <Box component="span">Home</Box>
                </Link>
              </ListItem>
              <ListItem
                className={`${classes.navListItem} ${
                  active === "about" ? classes.active : null
                }`}
                onClick={() => setActive("about")}
              >
                <Link to="/about">
                  <InfoIcon fontSize="small" />
                  <Box component="span">About us</Box>
                </Link>
              </ListItem>
              <ListItem
                className={`${classes.navListItem} ${
                  active === "services" ? classes.active : null
                }`}
                onClick={() => setActive("services")}
              >
                <Link to="/services">
                  <MedicalServicesIcon fontSize="small" />
                  <Box component="span">Our services</Box>
                </Link>
              </ListItem>
              <ListItem
                className={`${classes.navListItem} ${
                  active === "connect" ? classes.active : null
                }`}
                onClick={() => setActive("connect")}
              >
                <Link to="/connectus">
                  <CallIcon fontSize="small" />
                  <Box component="span">Connect us</Box>
                </Link>
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
