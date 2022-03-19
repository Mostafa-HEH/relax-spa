// Navbar components contains:
//  1) fast links to site pages (Home - about us - our services - connect us - make appointment).
//
// In this component you found (react route dom , mui)
//
//  uses ( <Navbar/> )

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Slide from "@mui/material/Slide";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Logo from "../Logo";

import { navLinks } from "../../Services/Constants/navbar";

import { useStyles } from "./styles";

const Navbar = (props) => {
  // active page link state
  const [active, setActive] = useState("home");

  //  active drawer state if screen size less than meduim size.
  const [drawer, setDrawer] = useState(false);

  // Catch medium size , turn true when get it.
  const drawerMatch = useMediaQuery((theme) => theme.breakpoints.down("md"));

  // navbar styles from './styles.js'.
  const classes = useStyles(props);

  // Trigger settings.
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
    // Change active if page booked or refreshed
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

    // Scroll page to top when change between pages components.
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [active]);

  // render list of links
  const listRender = () => {
    return (
      <List className={classes.navList}>
        {/* Generate nav list items */}
        {navLinks.map(({ id, name, icon, linkUrl, linkName }) => (
          <ListItem
            key={id}
            className={`${classes.navListItem} ${
              active === name ? classes.active : null
            }`}
            onClick={() => setActive(name)}
          >
            <Link to={linkUrl}>
              {icon()}
              <Box component="span">{linkName}</Box>
            </Link>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <>
      {/* Give space behind navbar to make page start after navbar */}
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          {/* Render in small size if drawerMatch is true or other of big size */}
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
              {/* Render list item */}
              {listRender()}
              <Button
                variant="contained"
                component={Link}
                to="/reservation"
                onClick={() => setActive("")}
              >
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
            {/* Render list item */}
            {listRender()}
            <Button
              variant="contained"
              component={Link}
              to="/reservation"
              onClick={() => setActive("")}
            >
              Make an appointment
            </Button>
          </Drawer>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Navbar;
