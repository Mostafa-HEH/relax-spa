// Footer components contains:
//  1) site logo
//
// In this component you found (react route dom , mui)
//
//  uses
//    ( <Logo type="link" color="#fff"/> ) with redirect on click.
//    ( <Logo color="#fff"/> ) only logo without click.
//
// By default color white

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useStyles } from "./styles";

const Logo = ({ type, color }) => {
  // logo styles comes from './styles.js' .
  const classes = useStyles({ color });

  // Render if logo type with link
  if (type === "link")
    return (
      <Typography
        variant="h1"
        component="h1"
        className={classes.logo}
        color={color}
      >
        <Link to="/">
          <Box className={classes.logoColor} component="span">
            Relax
          </Box>{" "}
          spa
        </Link>
      </Typography>
    );

  // Render if logo type without link
  return (
    <Typography variant="h1" component="h1" className={classes.logo}>
      <Box className={classes.logoColor} component="span">
        Relax
      </Box>{" "}
      spa
    </Typography>
  );
};

export default Logo;
